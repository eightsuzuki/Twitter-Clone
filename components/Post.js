import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    TrashIcon,
  } from "@heroicons/react/outline";

export default function Post( {post} ) {
  return (
    <div className="">
      {/* user image */}
      <img
        className=""
        src={post.userImg}
        alt="user-img"
      />
      {/* right side */}
      <div className="">
        {/* Header */}

        <div className="">
          {/* post user info */}
          <div className="">
            <h4 className="">
              {post.name}
            </h4>
            <span className="">@{post.username} - </span>
            <span className="">
              {post.timestamp}
            </span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="" />
        </div>

        {/* post text */}

        <p className="">
          {post.text}
        </p>

        {/* post image */}

        <img className="" src={post.img} alt="" />

        {/* icons */}

        <div className="">
          <ChatIcon className="" />
          <TrashIcon className="" />
          <HeartIcon className="" />
          <ShareIcon className="" />
          <ChartBarIcon className="" />
        </div>
      </div>
    </div>
  )
}
