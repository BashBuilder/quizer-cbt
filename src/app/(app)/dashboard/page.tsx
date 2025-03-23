"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";

const Dashboard = () => {
  const { subscribeCount, username } = useAuth();
  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl text-gray-800">Welcome, {username}!</h1>
      <div className="mt-5 rounded border border-gray-300 bg-gray-100 p-4">
        <h2 className="text-xl text-gray-600">Subscription Details</h2>
        <p className="text-gray-500">
          Practice Count: {subscribeCount.practice}
        </p>
        <p className="text-gray-500">Jamb Count: {subscribeCount.jamb}</p>
      </div>
    </div>
  );
};

export default Dashboard;
