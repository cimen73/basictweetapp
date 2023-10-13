
const tweets = [];
let twetCont;

const editableInput = document.querySelector(".editable");

const placeholder = document.querySelector(".placeholder");


const counter = document.querySelector(".counter");

const tweetButton = document.querySelector(".button");

const readonly = document.querySelector(".readonly");

const tweetContainer = document.querySelector(".tweet-container");

const tweetsContainer = document.querySelector(".tweets-container");

editableInput.addEventListener("click", () => {
  placeholder.style.color = "#c5ccd3";
});

editableInput.onblur = () => {
  placeholder.style.color = "#98a5b1";
};

editableInput.onkeypress = (e) => {
  placeholder.style.display = "none";

  const inputContent = e.target.innerText;

  inputValidate(inputContent);
};

editableInput.onkeyup = (e) => {
  placeholder.style.display = "none";
  const inputContent = e.target.innerText;

  inputValidate(inputContent);
};

const inputValidate = (tweet) => {
  twetCont = tweet;

  const tweetLimit = 10;

  const tweetLength = tweet.length;

  const currentLimit = tweetLimit - tweetLength;


  let newTweet;

  //Control of tweet
  if (tweetLength <= 0) {
  
    placeholder.style.display = "block";
 
    counter.style.display = "none";
  
    tweetButton.classList.remove("active");
  } else {
  
    counter.style.display = "block";
    tweetButton.classList.add("active");
  }
  counter.innerText = currentLimit;

  if (tweetLength > tweetLimit) {
    let overTweet = tweet.substr(tweetLimit, tweetLength);
 
    let overTweetElement = `<span class='overText'>${overTweet}</span>`;
    newTweet = tweet.substr(0, tweetLimit) + overTweetElement;

    readonly.style.zIndex = "1";
    counter.style.color = "red";
    tweetButton.classList.remove("active");
  } else {
    counter.style.color = "#660600";
  }

  readonly.innerHTML = newTweet;
};

tweetButton.addEventListener("click", () => {
    tweetsContainer.innerHTML=''
    tweets.push(twetCont);
  console.log(twetCont)
    tweets.map((tweet) => {
      const tweetCard = document.createElement("div");
      tweetCard.innerHTML = `
              <div class="tweet-container">
                <img
                  id="profilePhoto"
                  src="foto.jpeg"
                  
                />
          
               
                <h3 class="userName">Çimen</h3>
                <p class="tweet">${tweet}</p>
                <img
                id="profilePhoto"
                src="foto.jpeg"
                
              />
              </div>`;
  
      tweetsContainer.appendChild(tweetCard);
    });
  });
  