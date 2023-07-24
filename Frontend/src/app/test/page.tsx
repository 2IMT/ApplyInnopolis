import Card from '../components/card'
import Button from '../components/button'
import InputField from '../components/inputField'

interface FetchedQuestion {
    Id: number;
    Name: string;
    Text: string;
}

interface FetchedQuestions {
    Test: {
        Name: string;
        Time: number;
    }
    Questions: FetchedQuestion[];
}

function fetchQuestions(testId: number): Promise<FetchedQuestions> {
    return fetch('https://cybertoad.ru/api/tests/getTest?id=' + testId, { cache: "no-store" })
        .then(response => response.json())
        .then(response => response as FetchedQuestions)
}

function Question(question: FetchedQuestion) {
    return (
        <Card heading={question.Name} body={
            <div>
                <span>{question.Text}</span>
                <InputField labelName="Answer:" inputName={"question" + question.Id} />
            </div>
        } />
    )
}

async function Questions({ questions }: {
    questions: FetchedQuestions;
}) {
    let questionsList: JSX.Element[] = [];

    for (let i = 0; i < questions.Questions.length; i++) {
        questionsList.push(Question(questions.Questions[i]));
    }

    questionsList.push(<Button inputType="submit" text="SUBMIT" />);

    return questionsList;
}

export default async function Test(params: { searchParams: { id: number } }) {
    try {
        const questions = await fetchQuestions(params.searchParams.id);

        return (
            <main>
                <Card heading={questions.Test.Name + " (Time: " + questions.Test.Time + " min)"} body={
                        <Questions questions={questions} />
                } />

            </main>
        )
    }
    catch (e) {
        return (
            <main>
                An error occurred while loading a test page.
            </main>
        )
    }
}