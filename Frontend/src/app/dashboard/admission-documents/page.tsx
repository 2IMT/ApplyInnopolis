import Card from "../../components/card"
import Button from "../../components/button"
import TextArea from "../../components/textArea"

export default function AdmissionDocuments() {
    return (
        <main>
            <Card heading="Admission Documents" body={
                <form>
                    <TextArea labelName="How did you know about Innopolis University? When did you make decision that you want to study at Innopolis University?"
                        inputName="how_did_you_know" />

                    <TextArea labelName="In your opinion, what is the main difference of Innopolis University in comparison with other Universities? What is important for you when you choose the place (University) to study?"
                        inputName="difference" />

                    <TextArea labelName="Tell us about your achievements in IT, Math or Physics. Which contests, hackatons or projects have you participated in or will participate this year?"
                        inputName="achievements" />

                    <TextArea labelName="Which other Universities you would like to study in (not considering Innopolis University)?"
                        inputName="others" />

                    <Button text="SUBMIT" inputType="submit" />
                </form>
            } />
        </main>
    )
}