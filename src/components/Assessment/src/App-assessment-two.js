import React, { Component } from 'react';
import quizQuestionsSet2 from './api/quiz2';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from "./svg/logo5.png";
import './App-assessment.css';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

var score_final = 0;
class AppTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: ''
      ,answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
    
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestionsSet2.map(question =>
      
      this.shuffleArray(question.answers)
       
    );
    console.log(shuffledAnswerOptions);
    this.setState({
      question: quizQuestionsSet2[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    return array;
   }

  handleAnswerSelected(event) {
    var temp = parseInt(event.currentTarget.value);
    score_final = score_final + temp;
    console.log(score_final);

    if (this.state.questionId < quizQuestionsSet2.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestionsSet2[counter].question
      ,answerOptions: quizQuestionsSet2[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestionsSet2.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {   
    return <Result quizResult={score_final} />;
  }

  render() {
    return (
      <div className="">
        <div className="App-header-assessment">
          <img src={logo} className="App-logo-assessment" alt="logo" />
          <h2 className="text">Depression Test</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default AppTwo;