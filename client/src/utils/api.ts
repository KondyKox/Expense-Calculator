import { getToken } from "./auth";

// Get expense details on page
export const fetchExpenseById = async (id: string) => {
  const response = await fetch(`/api/expenses/${id}`);
  if (!response.ok) throw new Error("Expense not found");
  return response.json();
};

// Update expense
export const updateExpenseById = async (id: string, updatedData: any) => {
  const response = await fetch(`/api/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) throw new Error("Failed to update expense");
  return response.json();
};

// -------
export const fetchWithAuth = (url: string, options: RequestInit = {}) => {
  const token = getToken();
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  return fetch(url, { ...options, headers });
};
