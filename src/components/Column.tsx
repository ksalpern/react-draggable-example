import React, { useState } from "react";

import { cn } from "../utils/cn";
import { Card as CardType } from "../utils/types";
import { AddCard } from "./AddCard";
import { Card } from "./Card";
import { DropIndicator } from "./DropIndicator";

export const Column = ({
  title,
  backgroundColor,
  cards,
  column,
  setCards,
}: {
  title: string;
  backgroundColor: string;
  cards: CardType[];
  column: string;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}): JSX.Element => {
  const [active, setActive] = useState(false);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: CardType,
  ) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = (element as HTMLElement).dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: Element[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      (i as HTMLElement).style.opacity = "0";
    });
  };

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    (el.element as HTMLElement).style.opacity = "1";
  };

  const getNearestIndicator = (
    e: React.DragEvent<HTMLDivElement>,
    indicators: Element[],
  ) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      },
    );

    return el;
  };

  const getIndicators = (): Element[] => {
    return Array.from(
      document.querySelectorAll(`[data-column="${column}"]`),
    ) as Element[];
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-center w-fit gap-2">
        <h3
          className={cn("font-medium rounded-2xl px-2 py-0.5", backgroundColor)}
        >
          {title}
        </h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "h-full w-full transition-colors",
          active && "bg-primary/20",
        )}
      >
        {filteredCards.map((card) => {
          return (
            <Card key={card.id} {...card} handleDragStart={handleDragStart} />
          );
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};
