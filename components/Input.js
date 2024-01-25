import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="">
      <img
        src="https://eightsuzuki.github.io/images/profile.png"
        className=""
      />
      <div className="">
        <div className="">
          <textarea className=""></textarea>
        </div>
        <div className="">
            <div className="">
                <PhotographIcon className=""/>
                <EmojiHappyIcon className=""/>
            </div>
            <button className="">Tweet</button>
        </div>
      </div>
    </div>
  );
}