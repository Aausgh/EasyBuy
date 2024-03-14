import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

const customer = [
    {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "Leslie Alexander",
        job: "Model",
        img: "https://dummyimage.com/107x107"
    },
    {
        desc: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
        name: "Alper Kamu",
        job: "DESIGNER",
        img: "https://dummyimage.com/107x107"
    },
    {
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        name: "Leslie Alexander",
        img: "https://dummyimage.com/107x107",
        job: "model"
    }
]

const Testimonial = () => {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={customer}
                direction="right"
                speed="slow"
            />
        </div>
    )
}

export default Testimonial