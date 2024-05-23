import ReactCard from "../app/components/ReactCard";
import MainLayout from "../layout/MainLayout";
import eventData from "../data/events.json";
const Events = () => {
  return (
    <MainLayout>
      <div className="container">
        <h2 className="text-center mt-4 fst-italic">Explore Events</h2>
        <div className="fortDiv">
          <div className="mt-4 row">
            {eventData["Events"].map((ele, index) => (
              <div className="col-3 events" key={index}>
                {
                  <ReactCard
                    key={ele.id}
                    imgSrc={ele.image}
                    readMore={false}
                    description={ele.description}
                    title={ele.event_name}
                    location={ele.Location}
                    place={ele.fort_name}
                    date={ele.date}
                    cardImgClass={"eventCardImg"}
                    mainCardDiv={"eventCardDiv"}
                    cardBodyDiv={"eventBodyDiv"}
                    cardTitleDiv={"eventTitleDiv"}
                    cardPlaceDiv={"eveCardPlace"}
                    cardDateDiv={"eveDateDiv"}
                    cardDescription={"eveDecriptionDiv"}
                  />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Events;
