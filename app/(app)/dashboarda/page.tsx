"use client";
import { ScoreModel } from "@/__types__";
import { RootState } from "@/hooks/store";
import { useGetScores } from "@/services/questions";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { data, isLoading } = useGetScores();
  const { subscribeCount, username } = useSelector(
    (state: RootState) => state.auth,
  );
  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl text-gray-800">Welcome, {username}!</h1>
      <div className="mt-5 rounded border border-gray-300 bg-primary p-4">
        <h2 className="text-xl text-white">Subscription Details</h2>
        <p className="text-white">Practice Count: {subscribeCount.practice}</p>
        <p className="text-white">Jamb Count: {subscribeCount.jamb}</p>
      </div>

      {isLoading ? (
        <div className="flex min-h-64 items-center justify-center">
          <Loader2 className="animate-spin" />{" "}
        </div>
      ) : (
        data && (
          <div className="py-4">
            <h2 className="text-3xl font-bold"> Scores </h2>
            {data.map((score: ScoreModel, index: number) => (
              <div
                key={index}
                className="mt-5 rounded border border-gray-300 bg-primary/20 p-4"
              >
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  {score.score.map((subjectScore, idx) => (
                    <p key={idx} className="text-gray-500">
                      {subjectScore.subject}: {subjectScore.score}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Dashboard;
