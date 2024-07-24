import React from "react";

const commentsData = [
  {
    name: "Himanshi Dafouty",
    text: "great man 🙏",
    replies: [
      {
        name: "Sobit",
        text: "Awesome 🫡",
        replies: [
          {
            name: "Himanshi Dafouty",
            text: "I was looking forward to this moment. Thank you!",
            replies: [
              {
                name: "Samaira",
                text: "great man",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Himanshi Dafouty",
        text: "Loved this ...  ",
        replies: [],
      },
    ],
  },
  {
    name: "Anshuman Rana",
    text: "I really enjoyed this video and would love to see more like it.:)",
    replies: [
      {
        name: "Himanshi Dafouty",
        text: "Yeah!! Me too ",
        replies: [
          {
            name: "Anshuman",
            text: "great man",
            replies: [],
          },
        ],
      },
      {
        name: "Shanaya ",
        text: "great man",
        replies: [],
      },
    ],
  },
  {
    name: "Shanaya Srivastava",
    text: "Was waiting for this .. Thank you",
    replies: [],
  },
  {
    name: "Samaira",
    text: "Awesome 🫡",
    replies: [
      {
        name: "Himanshi Dafouty",
        text: "Finally! the wait is over ..",
        replies: [],
      },
      {
        name: "Himanshi Dafouty",
        text: "Was waiting for this .. Thank you ",
        replies: [],
      },
      {
        name: "Himanshi Dafouty",
        text: "great man",
        replies: [],
      },
    ],
  },
  {
    name: "Himanshi Dafouty",
    text: "great man",
    replies: [
      {
        name: "Himanshi Dafouty",
        text: "Awesome 🫡",
        replies: [],
      },
      {
        name: "Pragyan ",
        text: "Was waiting for this .. Thank you ",
        replies: [],
      },
      {
        name: "Himanshi Dafouty",
        text: "great man",
        replies: [
          {
            name: "Himanshi Dafouty",
            text: "great man",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Himanshi Dafouty",
    text: "great man",
    replies: [
      {
        name: "Suhana",
        text: "great man",
        replies: [],
      },
    ],
  },
  {
    name: "Himanshi Dafouty",
    text: "Was waiting for this .. Thank you ",
    replies: [
      {
        name: "Mirdul",
        text: "great man",
        replies: [],
      },
      {
        name: "Aditya",
        text: "Hats off to you .. 💫💫",
        replies: [],
      },
    ],
  },
];

// N-Level Nesting
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* Replies*/}
      <div className="pl-5 border border-l-black ml-7">
        {/* Recursion */}
        <CommentsList comments={comment.replies} /> 
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm rounded-sm my-2">
      <img
        className="w-6 h-6"
        src="https://tse3.mm.bing.net/th?id=OIP.Mydkhl0AW3QEPAB9FkR46AHaHa&pid=Api&P=0&h=180"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">@{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 pl-5 p-2">
      <h1 className="text-2xl font-bold mb-3">Comments..</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;