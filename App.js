import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  function goalInputHandler(e) {
    setText(e);
  }

  function addGoalHandler() {
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: text, id: Math.random().toString() },
    ]);
    setShowModal(false);
  }
 
  function deleteHandler(id){
    setGoals(currentGoal => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (

    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <View style={styles.modalButton}>
      <Button onPress={()=> setShowModal(!showModal)} title={'Add New Goal'} color={'#b180f0'} />
      </View>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        showModal ={showModal}
        setShowModal={setShowModal}
      />
      <GoalItem goals={goals} onDeleteItem={deleteHandler} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  modalButton: {
    paddingHorizontal:15
  }
});
