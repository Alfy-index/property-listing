import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";

import items from "./data";
const RoomContext = React.createContext();

// Your web app's Firebase configuration

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  //get Data
  componentDidMount() {
    let rooms = this.formatData(items);
    // console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  readData = () => {
    const db = firebase.firestore();

    db.collection("houses")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.data().name);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    return tempRooms.find((room) => room.slug === slug);
  };
  handleChange = (event) => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState({ [name]: value }, this.filterRooms);
  };
  //capture form

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    //all rooms
    let tempRooms = [...rooms];
    //transform value
    capacity = parseInt(capacity);
    price = parseInt(price);
    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    //filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    this.readData();
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
