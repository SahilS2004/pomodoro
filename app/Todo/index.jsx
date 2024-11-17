import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false,
        },
      ]);
      setInputValue('');
    } else {
      Alert.alert('Error', 'Please enter a valid todo');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    Alert.alert(
      'Delete Todo',
      'Are you sure you want to delete this todo?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setTodos(todos.filter((todo) => todo.id !== id));
          },
          style: 'destructive',
        },
      ]
    );
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditValue(text);
  };

  const saveEdit = (id) => {
    if (editValue.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: editValue.trim() } : todo
        )
      );
      setEditingId(null);
      setEditValue('');
    } else {
      Alert.alert('Error', 'Todo cannot be empty');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Todo List</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Add a new todo..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.todosContainer}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            {editingId === todo.id ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.editInput}
                  value={editValue}
                  onChangeText={setEditValue}
                />
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => saveEdit(todo.id)}
                >
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setEditingId(null)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.todoContent}>
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => toggleComplete(todo.id)}
                >
                  {todo.completed && <View style={styles.checked} />}
                </TouchableOpacity>
                <Text
                  style={[
                    styles.todoText,
                    todo.completed && styles.completedTodo,
                  ]}
                >
                  {todo.text}
                </Text>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => startEditing(todo.id, todo.text)}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteTodo(todo.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#397097',
  },
  header: {
    padding: 20,
    backgroundColor: '#4F7FA2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todosContainer: {
    flex: 1,
    padding: 20,
  },
  todoItem: {
    backgroundColor: '#4F7FA2',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#2196F3',
    borderRadius: 6,
  },
  todoText: {
    color:'white',
    flex: 1,
    fontSize: 16,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  editContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  editInput: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default TodoApp;