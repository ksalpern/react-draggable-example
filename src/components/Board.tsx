import React, { useState } from "react";

import { COLUMNS_DATA, DEFAULT_CARDS } from "../utils/data";
import { BurnBarrel } from "./BurnBarrel";
import { Column } from "./Column";

export const Board = (): JSX.Element => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      {COLUMNS_DATA.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          column={column.id}
          backgroundColor={column.backgroundColor}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <BurnBarrel setCards={setCards} />
    </div>
  );
};
