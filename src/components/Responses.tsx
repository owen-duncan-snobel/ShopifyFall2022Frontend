import React from 'react'

interface Choices {
    finish_reason: string,
    index: number,
    logprobs: number | null,
    text: string
}

interface Response {
    choices: Choices[],
    created: number,
    id: string,
    model: string,
    object: string
    prompt: string
}

interface ResponsesProps {
    responses: Response[]
}

export const Responses: React.FC<ResponsesProps> = ({responses}) => {
    return (
        <ul>
            {responses.map((response) => {
                const formatDate = new Date(response.created * 1000)
                const date = formatDate.toDateString()
                const time = formatDate.toLocaleTimeString()
            
                return (
                    <li className='block p-6 max-w-md rounded-lg border border-gray-200 shadow-md bg-gray-800 hover:bg-gray-700 mt-2 mb-4' key={response.created}>              
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>Prompt</h5>
                        <p className='font-normal text-gray-300 pl-5 pr-5'>{response.prompt}</p>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>Response</h5>
                        <p className='font-normal text-gray-300 pl-5 pr-5'> {response.choices[0].text.split('\n').map(line =>line.length > 0 ? <span key={line}>{line} <br/></span> : '')}</p>
                        <p className='pt-5 font-extrabold text-sm text-cyan-400'>{`${date} ${time}`}</p>
                    </li>
                )
            })}
        </ul>
    )
}