"use client";
import { GET_CONFERENCE } from "@/lib/Query";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ConferenceItem from "./components/ConferenceItems";
import DragAndDropMenu from "./components/DragAndDropMenu";
type ConferenceProps = {
  params: { id: string };
};
const ConferenceDetails = ({ params }: ConferenceProps) => {
  const [selectedItem, setSelectedItem] = useState<string>("organizers");
  const [menuDetails, setMenuDetails] = useState<Array<any>>([]);

  const { data, loading, error } = useQuery(GET_CONFERENCE, {
    variables: {
      id: params?.id,
    },
  });
  const { conference } = data ?? {};
  useEffect(() => {
    if (conference && conference[selectedItem]) {
      // Check if conference is not null/undefined and if the selected item exists in conference
      setMenuDetails(conference[selectedItem]);
    }
  }, [selectedItem, conference]);
  return (
    <section className="container py-10 lg:mx-12 md:mx-12 md:px-14 px-6">
      <h1 className="lg:text-5xl text-xl  font-bold mb-8">
        {conference?.name}
      </h1>

      <div className="block lg:flex md:flex justify-center gap-12">
        <div className="lg:flex-[4] md:flex-[4]">
          <DragAndDropMenu
            conference={conference}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            menuDetails={menuDetails}
          />
        </div>
        <div className="hidden lg:block md:block lg:flex-[8] md:flex-[8]">
          <ConferenceItem
            menuDetails={menuDetails}
            selectedItem={selectedItem}
          />
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetails;
