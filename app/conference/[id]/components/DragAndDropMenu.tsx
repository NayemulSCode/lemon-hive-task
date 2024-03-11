"use client";
import updownarrow from "@/public/timeline/up-down-arrow.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConferenceItems from "./ConferenceItems";
type DragDropProps = {
  conference: Object;
  setSelectedItem: (type: string) => void;
  selectedItem: string;
  menuDetails: Array<any>;
};
const DragAndDropMenu = ({
  conference,
  setSelectedItem,
  selectedItem,
  menuDetails,
}: DragDropProps) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    if (conference) {
      // Filter out object keys from the conference object
      const filteredKeys = Object.keys(conference).filter(
        (key) => typeof conference[key] === "object"
      );
      setItems(filteredKeys);
    }
  }, [conference]);

  const handleDragStart = (
    e: React.DragEvent<HTMLLIElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, newIndex: number) => {
    e.preventDefault(); // Prevent default behavior to enable drop
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const newItems = [...items];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(newIndex, 0, removed);
    setItems(newItems);
  };

  return (
    <div className="flex justify-center">
      <ul className="w-full">
        {items.map((item: any, index: number) => (
          <div>
            <li
              key={item} // Use item as key since it represents the property
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onClick={(e) => setSelectedItem(item)}
              className="flex justify-start items-center group transition-all mb-6 font-bold text-xl border rounded-md cursor-pointer p-2 m-1  hover:bg-yellow hover:text-white"
            >
              <Image
                src={updownarrow}
                className="w-14 box-border p-3 bg-gray-50 rounded-lg"
                alt="up-down-arrow"
              />
              <p className="px-7 lg:pe-32 text-darkBlue group-hover:text-white">
                {item}
              </p>
            </li>
            {selectedItem === item && (
              <div className="lg:hidden md:hidden  block ">
                <ConferenceItems
                  menuDetails={menuDetails}
                  selectedItem={selectedItem}
                />
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropMenu;
