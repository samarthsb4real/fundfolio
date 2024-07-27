"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import CardInfo from "./_components/CardInfo";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses, Incomes } from "../../../utils/schema";
import BarChartDashboard from "./_components/BarChartDashboard";
import ExpenseListTable from "./_components/ExpenseListTable";
import BudgetItem from "./budgets/_components/BudgetItem";

function Dashboard() {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpensesList] = useState([]);

  useEffect(() => {
    if (user) {
      getBudgetList();
      getAllExpenses();
      getIncomeList();
    }
  }, [user]);

  const getBudgetList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Budgets),
          totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
          totalItem: sql`count(${Expenses.id})`.mapWith(Number),
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));
      setBudgetList(result);
    } catch (error) {
      console.error("Error fetching the Budget List: ", error);
    }
  };

  const getAllExpenses = async () => {
    try {
      const result = await db
        .select({
          id: Expenses.id,
          name: Expenses.name,
          amount: Expenses.amount,
          createdAt: Expenses.createdAt,
        })
        .from(Expenses)
        .where(eq(Expenses.budgetId, Budgets.id))
        .where(eq(Budgets.createdBy, user.primaryEmailAddress.emailAddress))
        .orderBy(desc(Expenses.id));
      setExpensesList(result);
    } catch (error) {
      console.error("Error fetching the Expenses: ", error);
    }
  };

  const getIncomeList = async () => {
    try {
      const result = await db
        .select({
          ...getTableColumns(Incomes),
          totalAmount: sql`sum(cast(${Incomes.amount} as numeric))`.mapWith(
            Number
          ),
        })
        .from(Incomes)
        .where(eq(Incomes.createdBy, user.primaryEmailAddress.emailAddress))
        .groupBy(Incomes.id);
      setIncomeList(result);
    } catch (error) {
      console.error("Error fetching the Income List: ", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="font-bold text-4xl">Hi, {user?.username}</h1>
      <p className="font-semibold mt-2 text-gray-500">
        Here's what's happening with your money. Let's manage your expenses.
      </p>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />

      <div className="grid grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
        <div className="lg:col-span-2">
          <BarChartDashboard budgetList={budgetList} />
          <ExpenseListTable
            expenseList={expenseList}
            refreshData={() => getBudgetList()}
          />
        </div>
        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Recently Added</h2>
          {budgetList?.length > 0
            ? budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))
            : [1, 2, 3, 4].map((items, index) => (
                <div className="h-[180px] w-full bg-slate-300 lg:animate-pulse"></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
