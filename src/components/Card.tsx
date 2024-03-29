import React from "react";

import { motion } from "framer-motion";

import { Card as CardType } from "../utils/types";
import { DropIndicator } from "./DropIndicator";

export const Card = ({
  title,
  id,
  column,
  handleDragStart,
}: {
  title: string;
  id: string;
  column: string;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: CardType) => void;
}): JSX.Element => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable={true}
        onDragStart={(e) =>
          handleDragStart(e as unknown as React.DragEvent<HTMLDivElement>, {
            title,
            id,
            column,
          })
        }
        className="cursor-grab rounded bg-primary p-3 active:cursor-grabbing"
      >
        <p className="text-sm">{title}</p>
      </motion.div>
    </>
  );
};
