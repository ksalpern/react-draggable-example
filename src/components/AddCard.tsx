import { Plus } from "lucide-react";
import React, { useState } from "react";

import { motion } from "framer-motion";

import { Card } from "../utils/types";

export const AddCard = ({
  column,
  setCards,
}: {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}): JSX.Element => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard: Card = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((prevCards) => [...prevCards, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-700/50 bg-violet-500/10 p-3 text-sm text-neutral-50 placeholder-neutral-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-800 px-3 py-1.5 text-xs text-white transition-colors hover:bg-neutral-700"
            >
              <span>Add</span>
              <Plus className="size-4" />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-400/20 rounded"
        >
          <Plus className="size-4" />
          <span>New</span>
        </motion.button>
      )}
    </>
  );
};
