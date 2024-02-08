import React from "react";

const commentsData = [
  {
    name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Nitya Singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Nitya Singh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Nitya Singh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Nitya Singh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Nitya Singh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Nitya Singh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Nitya Singh",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [{  name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [{  name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [{  name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [{  name: "Nitya Singh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },],
  },],
  },],
  },],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className=" flex shadow-sm bg-gray-100 m-1 p-2 rounded-lg">
      <img
        className="w-8 h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Wza0WER4F60dcEv5rpVcquvAeDGymlpzONQngivrkg&s"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} >
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
