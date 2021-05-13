import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import data from './data.json';


const App = () => {
  const [people, setPeople] = useState(data);
    const [likedUsers, setLikedUsers] = useState[()];
    const [superLikedUsers, setSuperLikedUsers] = useState[()];
    const [dislikedUsers, setDislikedUsers] = useState[()];
    const activeUser = 0;
   
    const modifySuperficialChoices = (userId, action) => {
      const newPeople = [...people];
      const newLikedUsers = [...likedUsers];
      const newSuperLikedUsers = [...superLikedUsers];
      const newDislikedUsers = [...dislikedUsers];
    

    switch (action){
      case 'ADD_TO_LIKED_USER':
        if(!people[activeUser].likedUser.includes(userId)){
          newPeople[activeUser].likedUsers.push(userId);
          setLikedUsers(newLikedUsers);
          setPerson(removedPersonFromDataSrc(people, userId))
        }
        break;
        
        case 'ADD_TO_DISLIKED_USER':
        break;
        case 'ADD_TO_SUPERLIKED_USER':
        break;
        default:
          return people;
    }
    }

    return (
    
  <div cassName="app">
    <Header />
      {people[1] ? (
        <Person
        key={person[1].id}
        person={people[1]}
        modifySuperficialChoices={modifySuperficialChoices}
        likedUsers={likedUsers}
        />
      ): (
        <Lonely
        activeUserImage={people[activeUser].image}
        likedUser={likedUser}
        superLikedUser={superLikedUser}
        />
      )
      }
      
    
  </div>
  )
};

export default App;
