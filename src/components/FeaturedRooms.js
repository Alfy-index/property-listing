import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room} room={room} />;
    });
    return (
      <div>
        <section className="featured-rooms">
          <Title title="Featured Properties" />
          <div id="thepictures" className="carousel slide">
            <div className="item">
              <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default FeaturedRooms;
