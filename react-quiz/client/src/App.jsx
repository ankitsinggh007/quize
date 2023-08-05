import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Game from "./components/Game";

function App() {
  const [message,setMessage]=useState("");

  const [username, setUsername] = useState("");
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const navigate=useNavigate();
  
  
  const [authentication,setAuthentication]=useState({
    name:"",email:"",password:"",
  })
  useEffect(()=>{
    if(message){
      toast(message);
    }
  },[message]);
  
  useEffect(()=>{
    console.log("inside useeffect");
    if(username){
      localStorage.setItem('username', username);
    }
  },[username]);
  useEffect(()=>{
    const name = localStorage.getItem('username');
    console.log(name);
    if(name){
      setUsername(name);
      navigate("/game");
    }else{
      navigate("/");

    }
  },[]);
  const [random,setrandom]=useState(0);
  useEffect(()=>{
    const random= Math.floor(Math.random() * 5);
    setrandom(random);
  },[]);

  const data1 = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      "id": 4,
      "question": "What is the capital city of Australia?",
      "answers": [
        {
          "text": "Sydney",
          "correct": false
        },
        {
          "text": "Melbourne",
          "correct": false
        },
        {
          "text": "Canberra",
          "correct": true
        },
        {
          "text": "Perth",
          "correct": false
        }
      ]
    },{
      "id": 5,
      "question": "Which planet is known as the 'Red Planet'?",
      "answers": [
        {
          "text": "Mars",
          "correct": true
        },
        {
          "text": "Jupiter",
          "correct": false
        },
        {
          "text": "Venus",
          "correct": false
        },
        {
          "text": "Saturn",
          "correct": false
        }
      ]
    },{
      "id": 6,
      "question": "Who wrote the novel 'Pride and Prejudice'?",
      "answers": [
        {
          "text": "Jane Austen",
          "correct": true
        },
        {
          "text": "Emily Bronte",
          "correct": false
        },
        {
          "text": "Charlotte Bronte",
          "correct": false
        },
        {
          "text": "Virginia Woolf",
          "correct": false
        }
      ]
    },
    {
      "id": 7,
      "question": "What is the chemical symbol for the element gold?",
      "answers": [
        {
          "text": "Ag",
          "correct": false
        },
        {
          "text": "Au",
          "correct": true
        },
        {
          "text": "Fe",
          "correct": false
        },
        {
          "text": "Hg",
          "correct": false
        }
      ]
    },
    {
      "id": 8,
      "question": "Which country won the FIFA World Cup in 2018?",
      "answers": [
        {
          "text": "Germany",
          "correct": false
        },
        {
          "text": "Brazil",
          "correct": false
        },
        {
          "text": "France",
          "correct": true
        },
        {
          "text": "Argentina",
          "correct": false
        }
      ]
    },
    {
      "id": 9,
      "question": "What is the tallest mountain in the world?",
      "answers": [
        {
          "text": "Mount Kilimanjaro",
          "correct": false
        },
        {
          "text": "Mount Everest",
          "correct": true
        },
        {
          "text": "Mount Fuji",
          "correct": false
        },
        {
          "text": "Mount McKinley",
          "correct": false
        }
      ]
    },
    {
      "id": 10,
      "question": "Which scientist developed the theory of general relativity?",
      "answers": [
        {
          "text": "Isaac Newton",
          "correct": false
        },
        {
          "text": "Albert Einstein",
          "correct": true
        },
        {
          "text": "Stephen Hawking",
          "correct": false
        },
        {
          "text": "Nikola Tesla",
          "correct": false
        }
      ]
    },
    {
      "id": 11,
      "question": "Which country is home to the Great Barrier Reef?",
      "answers": [
        {
          "text": "Australia",
          "correct": true
        },
        {
          "text": "Brazil",
          "correct": false
        },
        {
          "text": "Canada",
          "correct": false
        },
        {
          "text": "India",
          "correct": false
        }
      ]
    },
    {
      "id": 12,
      "question": "Who painted the Mona Lisa?",
      "answers": [
        {
          "text": "Vincent van Gogh",
          "correct": false
        },
        {
          "text": "Leonardo da Vinci",
          "correct": true
        },
        {
          "text": "Pablo Picasso",
          "correct": false
        },
        {
          "text": "Claude Monet",
          "correct": false
        }
      ]
    },
    {
      "id": 13,
      "question": "What is the largest planet in our solar system?",
      "answers": [
        {
          "text": "Jupiter",
          "correct": true
        },
        {
          "text": "Saturn",
          "correct": false
        },
        {
          "text": "Mars",
          "correct": false
        },
        {
          "text": "Neptune",
          "correct": false
        }
      ]
    },
    {
      "id": 14,
      "question": "Who is the author of the Harry Potter book series?",
      "answers": [
        {
          "text": "J.K. Rowling",
          "correct": true
        },
        {
          "text": "Stephen King",
          "correct": false
        },
        {
          "text": "George R.R. Martin",
          "correct": false
        },
        {
          "text": "Dan Brown",
          "correct": false
        }
      ]
    },
    {
      "id": 15,
      "question": "Which planet is known as the 'Blue Planet'?",
      "answers": [
        {
          "text": "Venus",
          "correct": false
        },
        {
          "text": "Mars",
          "correct": false
        },
        {
          "text": "Earth",
          "correct": true
        },
        {
          "text": "Mercury",
          "correct": false
        }
      ]
    },
  ];
  const data2 = [
    {
      id: 1,
      question: "What is the capital city of Australia?",
      answers: [
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Perth",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the author of the novel 'To Kill a Mockingbird'?",
      answers: [
        {
          text: "Harper Lee",
          correct: true,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "George Orwell",
          correct: false,
        },
        {
          text: "J.D. Salinger",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which city hosted the 2016 Summer Olympics?",
      answers: [
        {
          text: "Rio de Janeiro",
          correct: true,
        },
        {
          text: "Tokyo",
          correct: false,
        },
        {
          text: "London",
          correct: false,
        },
        {
          text: "Beijing",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the largest planet in our solar system?",
      answers: [
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Neptune",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the author of the novel '1984'?",
      answers: [
        {
          text: "George Orwell",
          correct: true,
        },
        {
          text: "Ray Bradbury",
          correct: false,
        },
        {
          text: "Aldous Huxley",
          correct: false,
        },
        {
          text: "Ernest Hemingway",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who painted the 'Sistine Chapel' ceiling?",
      answers: [
        {
          text: "Michelangelo",
          correct: true,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the national animal of Canada?",
      answers: [
        {
          text: "Bald Eagle",
          correct: false,
        },
        {
          text: "Moose",
          correct: true,
        },
        {
          text: "Beaver",
          correct: false,
        },
        {
          text: "Polar Bear",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who invented the telephone?",
      answers: [
        {
          text: "Alexander Graham Bell",
          correct: true,
        },
        {
          text: "Thomas Edison",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "Thailand",
          correct: false,
        },
        {
          text: "Vietnam",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Salvador Dalí",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who is the Greek god of the sea?",
      answers: [
        {
          text: "Zeus",
          correct: false,
        },
        {
          text: "Poseidon",
          correct: true,
        },
        {
          text: "Hades",
          correct: false,
        },
        {
          text: "Ares",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which country is known as the 'Land Down Under'?",
      answers: [
        {
          text: "New Zealand",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "United States",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who wrote the play 'Hamlet'?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Arthur Miller",
          correct: false,
        },
        {
          text: "Anton Chekhov",
          correct: false,
        },
        {
          text: "Samuel Beckett",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the largest country in the world by land area?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "United States",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "Canada",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Who painted the famous artwork 'The Last Supper'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "What is the national flower of Japan?",
      answers: [
        {
          text: "Cherry Blossom",
          correct: true,
        },
        {
          text: "Lotus",
          correct: false,
        },
        {
          text: "Rose",
          correct: false,
        },
        {
          text: "Tulip",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "Who wrote the novel 'Pride and Prejudice'?",
      answers: [
        {
          text: "Jane Austen",
          correct: true,
        },
        {
          text: "Emily Brontë",
          correct: false,
        },
        {
          text: "Charlotte Brontë",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "What is the largest mountain in the world?",
      answers: [
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "Which country is famous for the Taj Mahal?",
      answers: [
        {
          text: "India",
          correct: true,
        },
        {
          text: "Egypt",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Mexico",
          correct: false,
        },
      ],
    },
  ];
  const data3 = [
    {
      id: 1,
      question: "Who is the author of the book '1984'?",
      answers: [
        {
          text: "George Orwell",
          correct: true,
        },
        {
          text: "Aldous Huxley",
          correct: false,
        },
        {
          text: "Ray Bradbury",
          correct: false,
        },
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the capital city of Canada?",
      answers: [
        {
          text: "Toronto",
          correct: false,
        },
        {
          text: "Montreal",
          correct: false,
        },
        {
          text: "Ottawa",
          correct: true,
        },
        {
          text: "Vancouver",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which country won the FIFA World Cup in 2014?",
      answers: [
        {
          text: "Germany",
          correct: true,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Salvador Dalí",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the tallest mountain in the world?",
      answers: [
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the author of the book 'To Kill a Mockingbird'?",
      answers: [
        {
          text: "Harper Lee",
          correct: true,
        },
        {
          text: "J.D. Salinger",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "George Orwell",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "George Bernard Shaw",
          correct: false,
        },
        {
          text: "Oscar Wilde",
          correct: false,
        },
        {
          text: "Arthur Miller",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the national animal of Australia?",
      answers: [
        {
          text: "Kangaroo",
          correct: true,
        },
        {
          text: "Koala",
          correct: false,
        },
        {
          text: "Emu",
          correct: false,
        },
        {
          text: "Platypus",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "Stephen King",
          correct: false,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
        {
          text: "Dan Brown",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which country is home to the Great Barrier Reef?",
      answers: [
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is known as the 'Father of Modern Physics'?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Stephen Hawking",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "What is the national flower of Japan?",
      answers: [
        {
          text: "Cherry Blossom",
          correct: true,
        },
        {
          text: "Lotus",
          correct: false,
        },
        {
          text: "Rose",
          correct: false,
        },
        {
          text: "Tulip",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "Who wrote the novel 'Pride and Prejudice'?",
      answers: [
        {
          text: "Jane Austen",
          correct: true,
        },
        {
          text: "Emily Brontë",
          correct: false,
        },
        {
          text: "Charlotte Brontë",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "What is the chemical symbol for iron?",
      answers: [
        {
          text: "Fe",
          correct: true,
        },
        {
          text: "Au",
          correct: false,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "Who directed the movie 'Inception'?",
      answers: [
        {
          text: "Christopher Nolan",
          correct: true,
        },
        {
          text: "Steven Spielberg",
          correct: false,
        },
        {
          text: "Martin Scorsese",
          correct: false,
        },
        {
          text: "Quentin Tarantino",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "Which country is famous for its tulips?",
      answers: [
        {
          text: "Netherlands",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
      ],
    },
  ];
  const data4 = [
    {
      id: 1,
      question: "What is the capital city of France?",
      answers: [
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "London",
          correct: false,
        },
        {
          text: "Berlin",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who painted the famous artwork 'The Mona Lisa'?",
      answers: [
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Salvador Dalí",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "Thailand",
          correct: false,
        },
        {
          text: "Vietnam",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the author of the book 'To Kill a Mockingbird'?",
      answers: [
        {
          text: "Harper Lee",
          correct: true,
        },
        {
          text: "J.D. Salinger",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "George Orwell",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the largest planet in our solar system?",
      answers: [
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Neptune",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is the author of the book 'Pride and Prejudice'?",
      answers: [
        {
          text: "Jane Austen",
          correct: true,
        },
        {
          text: "Emily Brontë",
          correct: false,
        },
        {
          text: "Charlotte Brontë",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which country won the FIFA World Cup in 2018?",
      answers: [
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "France",
          correct: true,
        },
        {
          text: "Argentina",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the tallest mountain in the world?",
      answers: [
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which scientist developed the theory of general relativity?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Stephen Hawking",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which country is home to the Great Barrier Reef?",
      answers: [
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who painted the famous artwork 'The Last Supper'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "Stephen King",
          correct: false,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
        {
          text: "Dan Brown",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which planet is known as the 'Blue Planet'?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Earth",
          correct: true,
        },
        {
          text: "Mercury",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "What is the chemical symbol for silver?",
      answers: [
        {
          text: "Ag",
          correct: true,
        },
        {
          text: "Au",
          correct: false,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "Who directed the movie 'The Shawshank Redemption'?",
      answers: [
        {
          text: "Steven Spielberg",
          correct: false,
        },
        {
          text: "Quentin Tarantino",
          correct: false,
        },
        {
          text: "Frank Darabont",
          correct: true,
        },
        {
          text: "Christopher Nolan",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "Which country is known as the 'Land of the Midnight Sun'?",
      answers: [
        {
          text: "Norway",
          correct: true,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "Sweden",
          correct: false,
        },
        {
          text: "Finland",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "What is the chemical symbol for iron?",
      answers: [
        {
          text: "Fe",
          correct: true,
        },
        {
          text: "Au",
          correct: false,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "Who is the author of the book 'The Great Gatsby'?",
      answers: [
        {
          text: "F. Scott Fitzgerald",
          correct: true,
        },
        {
          text: "George Orwell",
          correct: false,
        },
        {
          text: "Ernest Hemingway",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
  ];
  const data5 = [
    {
      id: 1,
      question: "Which country won the FIFA World Cup in 2018?",
      answers: [
        {
          text: "France",
          correct: true,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the author of the book 'To Kill a Mockingbird'?",
      answers: [
        {
          text: "Harper Lee",
          correct: true,
        },
        {
          text: "J.K. Rowling",
          correct: false,
        },
        {
          text: "George Orwell",
          correct: false,
        },
        {
          text: "Stephen King",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the capital city of Australia?",
      answers: [
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Perth",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Salvador Dalí",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the tallest mountain in the world?",
      answers: [
        {
          text: "Mount Everest",
          correct: true,
        },
        {
          text: "Mount Kilimanjaro",
          correct: false,
        },
        {
          text: "Mount Fuji",
          correct: false,
        },
        {
          text: "Mount McKinley",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the author of the book 'Pride and Prejudice'?",
      answers: [
        {
          text: "Jane Austen",
          correct: true,
        },
        {
          text: "Emily Brontë",
          correct: false,
        },
        {
          text: "Charlotte Brontë",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the chemical symbol for gold?",
      answers: [
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who is the director of the movie 'Inception'?",
      answers: [
        {
          text: "Christopher Nolan",
          correct: true,
        },
        {
          text: "Steven Spielberg",
          correct: false,
        },
        {
          text: "Quentin Tarantino",
          correct: false,
        },
        {
          text: "Martin Scorsese",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the national flower of Japan?",
      answers: [
        {
          text: "Cherry Blossom",
          correct: true,
        },
        {
          text: "Lotus",
          correct: false,
        },
        {
          text: "Rose",
          correct: false,
        },
        {
          text: "Tulip",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who is the author of the book '1984'?",
      answers: [
        {
          text: "George Orwell",
          correct: true,
        },
        {
          text: "Aldous Huxley",
          correct: false,
        },
        {
          text: "Ray Bradbury",
          correct: false,
        },
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which country is known as the 'Land of the Midnight Sun'?",
      answers: [
        {
          text: "Norway",
          correct: true,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "Sweden",
          correct: false,
        },
        {
          text: "Finland",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the chemical symbol for iron?",
      answers: [
        {
          text: "Fe",
          correct: true,
        },
        {
          text: "Au",
          correct: false,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who is the author of the book 'The Great Gatsby'?",
      answers: [
        {
          text: "F. Scott Fitzgerald",
          correct: true,
        },
        {
          text: "George Orwell",
          correct: false,
        },
        {
          text: "Ernest Hemingway",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the chemical symbol for silver?",
      answers: [
        {
          text: "Ag",
          correct: true,
        },
        {
          text: "Au",
          correct: false,
        },
        {
          text: "Fe",
          correct: false,
        },
        {
          text: "Hg",
          correct: false,
        },
      ],
    },
    {
      id: 16,
      question: "Who directed the movie 'The Shawshank Redemption'?",
      answers: [
        {
          text: "Frank Darabont",
          correct: true,
        },
        {
          text: "Steven Spielberg",
          correct: false,
        },
        {
          text: "Quentin Tarantino",
          correct: false,
        },
        {
          text: "Christopher Nolan",
          correct: false,
        },
      ],
    },
    {
      id: 17,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 18,
      question: "Who is the author of the book 'The Catcher in the Rye'?",
      answers: [
        {
          text: "J.D. Salinger",
          correct: true,
        },
        {
          text: "Harper Lee",
          correct: false,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "George Orwell",
          correct: false,
        },
      ],
    },
    {
      id: 19,
      question: "Which country is known as the 'Land of Smiles'?",
      answers: [
        {
          text: "Thailand",
          correct: true,
        },
        {
          text: "Japan",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Vietnam",
          correct: false,
        },
      ],
    },
    {
      id: 20,
      question: "Who painted the famous artwork 'The Scream'?",
      answers: [
        {
          text: "Edvard Munch",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Salvador Dalí",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
      ],
    },
  ];
  
  
  
  
  const data=[data1,data2,data3,data4,data5];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300",level:1 },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000",level:2 },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" ,level:3},
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000",level:4 },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000",level:5 },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
   <>
    {
      message?.length!=0 && <ToastContainer />
    }

   <Routes>
      <Route path="/"  element={ <Login username={username} setAuthentication={setAuthentication} authentication={authentication} setMessage={setMessage} setUsername={setUsername}/>}/>
      <Route path="/signup"  element={<Signup setAuthentication={setAuthentication} authentication={authentication} setMessage={setMessage} /> }/>
      <Route path="/game"  element={<Game username={username}setUsername={setUsername} timeOut={timeOut} moneyPyramid={moneyPyramid} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} earned={earned} setTimeOut={setTimeOut} data={data[random]} /> }/>
    </Routes>
</>
  );
}

export default App;
