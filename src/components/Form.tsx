import React, { Dispatch, SetStateAction } from 'react';


interface Request {
    prompt: string,
    temperature: number,
    max_tokens: number,
    top_p: number,
    frequency_penalty: number,
    presence_penalty: number
}

interface Choices {
    finish_reason: string,
    index: number,
    logprobs: number | null,
    text: string
}

interface Response {
    choices: Choices[]
    created: number,
    id: string,
    model: string,
    object: string
    prompt: string
}

interface FormProps {
    setResponses: Dispatch<SetStateAction<Response[]>>
    responses: Response[]
    text: string
    setText: Dispatch<SetStateAction<string>>
}

export const Form: React.FC<FormProps> = ({ responses, setResponses, text, setText }) => {

    const updateText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      localStorage.setItem("openai_text", JSON.stringify(event.target.value));
      setText(event.target.value);
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data: Request = {
            prompt: text,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }

        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(json => {
            const data = {
                ...json,
                prompt: text
            }
            localStorage.setItem("openai_responses", JSON.stringify([data, ...responses]));
            setResponses([data, ...responses]);
        })
    }

    return (
        <>
            <form className='' onSubmit={submitForm}>
                <textarea className='border rounded-md m-1' onChange={(e) => {
                    setText(e.target.value)
                    updateText(e)
                }} value={text} />
                <button type="submit" className='block bg-cyan-400 hover:bg-cyan-300 border-2 border-cyan-400 font-black rounded-md p-2'>Submit</button>
            </form>
        </>
    )
}