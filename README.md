# Linked_lists

## Description

Project inside the Odin Project's Full Stack JavaScript course.

To learn more about The Odin Project : https://www.theodinproject.com/

To learn more about the specific Full Stack JavaScript Path : https://www.theodinproject.com/paths/full-stack-javascript

The goal of this project is to create two classes or factories:

- LinkedList class / factory, which will represent the full list.
- Node class / factory, containing a value function and a link to the nextNode.

## Skills to practice

- Creating classes (constructor, parameters, getters, setters and methods)
- Implement a linked-list abstract data structure by creating custom linkedList and Node classes
- Using recursion

## Features

Node class should have the following methods :

- Value getter and setter
- Next node getter and setter

LinkedList class should have the following methods :

- head getter and setter : returns and gets the first node in the list
- size() : returns the total number of nodes in the list
- appendValue(value) : adds a new node containing value to the end of the list
- prepend(value) : adds a new node containing value to the start of the list
- tail() : returns the last node in the list
- append(value) : adds a new node containing value to the end of the list
- at(index) : returns the node at the given index
- pop() :removes the last element from the list
- contains(value) : returns true if the passed in value is in the list and otherwise returns false.
- find(value) : returns the index of the node containing value, or null if not found.
- toString() : represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
