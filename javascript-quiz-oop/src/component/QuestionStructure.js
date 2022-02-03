export class QuestionStructure {
    constructor(text, choice, answer) {
        this.text = text;
        this.choice = choice;
        this.answer = answer
    }


    correctAnswer(answer) {
        return choice === answer
    }
}

