import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Charan",
    text: "lajshdf askfh askdfh asjkdfhashf kash",
    replies: [
      {
        name: "Charan",
        text: "lajshdf askfh askdfh asjkdfhashf kash",
        replies: [
          {
            name: "Charan",
            text: "lajshdf askfh askdfh asjkdfhashf kash",
            replies: [
              {
                name: "Charan",
                text: "lajshdf askfh askdfh asjkdfhashf kash",
                replies: [
                  {
                    name: "Charan",
                    text: "lajshdf askfh askdfh asjkdfhashf kash",
                    replies: [
                      {
                        name: "Charan",
                        text: "lajshdf askfh askdfh asjkdfhashf kash",
                        replies: [{}],
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
        name: "Charan",
        text: "lajshdf askfh askdfh asjkdfhashf kash",
        replies: [{}],
      },
    ],
  },
  {
    name: "Charan",
    text: "lajshdf askfh askdfh asjkdfhashf kash",
    replies: [
      {
        name: "Charan",
        text: "lajshdf askfh askdfh asjkdfhashf kash",
        replies: [{}],
      },
    ],
  },
  {
    name: "Charan",
    text: "lajshdf askfh askdfh asjkdfhashf kash",
    replies: [
      {
        name: "Charan",
        text: "lajshdf askfh askdfh asjkdfhashf kash",
        replies: [
          {
            name: "Charan",
            text: "lajshdf askfh askdfh asjkdfhashf kash",
            replies: [{}],
          },
        ],
      },
    ],
  },
  {
    name: "Charan",
    text: "lajshdf askfh askdfh asjkdfhashf kash",
    replies: [{}],
  },
  {
    name: "Charan",
    text: "lajshdf askfh askdfh asjkdfhashf kash",
    replies: [{}],
  },
  {
    name: "Charan",
    text: "lajshdf askfh askdfh asjkdfhashf kash",
    replies: [{}],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
      <img src={USER_ICON} alt="user-icon" className="w-12 h-12" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
