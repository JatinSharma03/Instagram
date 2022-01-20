let articleBoxNavNo = document.querySelector('.articleBoxNavNo');
let navAddContainer = document.getElementById('navAddContainer');
let containerAdd = document.getElementById('containerAdd');
let article = document.getElementById('article');
let hidden = document.getElementById('hidden');
let containerTripleBar = document.getElementById('containerTripleBar');
let navTripleBarContainer = document.getElementById('navTripleBarContainer');
let sectionButtonEdit = document.getElementById('sectionButtonEdit');
let container = document.getElementById('container');
let containerEditProfile = document.getElementById('containerEditProfile');
let containerEditProfileNavNo = document.getElementById('containerEditProfileNavNo');
let feedPostDots = document.getElementById('feedPostDots');
updateFeedFun();

let a = 0;
navAddContainer.addEventListener('click',function(){
    a += 1;
    containerAdd.style.display = 'block';
    article.style.display = 'none';
    hidden.style.display = 'block';
});
let b = 0;
navTripleBarContainer.addEventListener('click',function(){
    b += 1;
    hidden.style.display = 'block';
    containerTripleBar.style.display = 'grid';
});
// nect fie pr h hidden


let c = 0;
sectionButtonEdit.addEventListener('click',function(){
    c += 1;
    container.style.display = 'none';
    containerEditProfile.style.display = 'block';
})

containerEditProfileNavNo.addEventListener('click',function(){
    if(c === 1){
        container.style.display = 'block';
        containerEditProfile.style.display = 'none';
        c = 0;
    }
});


let inputImage = document.getElementById('inputFileImg');
let containerAddBodyItem = document.getElementById('containerAddBodyItem');
let inputFeedPost = document.getElementById('inputFeedPost');
let inputFeedPostNavNo = document.getElementById('inputFeedPostNavNo');

containerAddBodyItem.addEventListener('click',funOpenInput);

function funOpenInput(){
    container.style.display = 'none';
    inputFeedPost.style.display = 'grid';
    containerAdd.style.display = 'none';
}

inputFeedPostNavNo.addEventListener('click',function(){
    container.style.display = 'block';
    inputFeedPost.style.display = 'none';
    postCaptionid.value = "";
    inputImage.value = '';
});

let readerResult;
inputImage.addEventListener('change',function(){
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            readerResult = reader.result;
        }); 
        reader.readAsDataURL(this.files[0]);
});

let postCaptionid = document.getElementById('postCaptionid');
let inputFeedPostNavYes = document.getElementById('inputFeedPostNavYes');

inputFeedPostNavYes.addEventListener('click',function(){
    let post = localStorage.getItem('posts');
    if(post == null){
        postItem = []; 
    }
    else{
        postItem = JSON.parse(post); 
    }
    postItem.unshift(readerResult);
    localStorage.setItem('posts',JSON.stringify(postItem));

    let postCaption = localStorage.getItem('postsCaptions');
    if(postCaption == null){
        postCaptionItem = []; 
    }
    else{
        postCaptionItem = JSON.parse(postCaption);
    }
    postCaptionItem.unshift(postCaptionid.value);
    localStorage.setItem('postsCaptions',JSON.stringify(postCaptionItem));
    postCaptionid.value = "";
    inputImage.value = '';
    container.style.display = 'block';
    inputFeedPost.style.display = 'none';

    updateFeedFun()
})

function updateFeedFun(){
    let post = localStorage.getItem('posts');
    if(post == null){
        postItem = []; 
    }
    else{
        postItem = JSON.parse(post); 
    }
    let editIndex = postItem.length-1;


    
    let postCaption = localStorage.getItem('postsCaptions');
    if(postCaption == null){
        postCaptionItem = []; 
    }
    else{
        postCaptionItem = JSON.parse(postCaption);
    }


    let refreshPostBox;
    refreshPostBox = '';
    let indexForOther = 0;
    let firstPostBox = articleBoxContainer.firstChild;
    postItem.forEach(function(element,index){
     
        refreshPostBox += ` <div class="articleBoxUpper" id="articleBoxUpper">
        <div class="articleBoxUpperLeftPhoto"></div>
        <div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
        <div class="articleBoxUpperRightDots" id="${index}a3" onclick="funPostOptions(this.id)">l</div>
    </div> 
    
    <div class="articleBox" onclick="funFeed(this.id)" id="${index}"><img src="${element}" alt=""></div> 
    
    <div class="articleBoxLower" id="articleBoxLower">
        <div class="articleBoxLowerLike">O</div>
        <div class="articleBoxLowerComment">Q</div>
    </div>
    
    <div class="articleBoxBottom" id="articleBoxBottom">
        <div class="articleBoxBottomLikes">9000 likes</div>
        <div class="articleBoxBottomQuot" id='articleBoxBottomQuot${index}'>
            <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${index}"><pre><b>swati_.suryawanshi</b> ${postCaptionItem[index]}</pre></div>
        </div>
        <div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${index}' onclick='funShowQuot(this.id,${index})'>... more</div>
        <div class="articleBoxBottomComments">View all 80 comments</div>
        <div class="articleBoxBottomAddComment">
            <div class="articleBoxBottomAddCommentPhoto"></div>
            <input type="text" placeholder="Add a comment...">
            <div class="articleBoxBottomAddCommentPost">Post</div>
        </div>
        <div class="articleBoxBottomTime">2 hours ago</div>
    </div>
    `        
    indexForOther += 1;
    });

    
    refreshPostBox += `  
    
    
    <div class="articleBoxUpper" id="articleBoxUpper">
    <div class="articleBoxUpperLeftPhoto"></div>
    <div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
    <div class="articleBoxUpperRightDots" id="${indexForOther}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther}"><img src="1.jpg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
    <div class="articleBoxLowerLike">&#10084;</div>
    <div class="articleBoxLowerComment"><i class="fa fa-comment"></i></div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
    <div class="articleBoxBottomLikes">9000 likes</div>
    <div class="articleBoxBottomQuot">
        <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther}">swati_.suryawanshi</div>
        <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
    </div>
    <div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther}' onclick='funShowQuot(this.id,${indexForOther})'>... more</div>
    <div class="articleBoxBottomComments">View all 80 comments</div>
    <div class="articleBoxBottomAddComment">
        <div class="articleBoxBottomAddCommentPhoto"></div>
        <input type="text" placeholder="Add a comment...">
        <div class="articleBoxBottomAddCommentPost">Post</div>
    </div>
    <div class="articleBoxBottomTime">2 hours ago</div>
</div>




<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+1}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+1}"><img src="2.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+1}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+1}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+1}' onclick='funShowQuot(this.id,${indexForOther+1})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>




<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+2}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+2}"><img src="3.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+2}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+2}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+2}' onclick='funShowQuot(this.id,${indexForOther+2})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>




<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+3}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+3}"><img src="4.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+3}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+3}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+3}' onclick='funShowQuot(this.id,${indexForOther+3})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>




<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+4}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+4}"><img src="5.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+4}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+4}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+4}' onclick='funShowQuot(this.id,${indexForOther+4})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>


<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+5}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+5}"><img src="6.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+5}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+5}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+5}' onclick='funShowQuot(this.id,${indexForOther+5})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>


<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+6}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+6}"><img src="7.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+6}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+6}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+6}' onclick='funShowQuot(this.id,${indexForOther+6})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>


<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+7}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+7}"><img src="8.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+7}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+7}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+7}' onclick='funShowQuot(this.id,${indexForOther+7})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>


<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+8}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+8}"><img src="9.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">O</div>
<div class="articleBoxLowerComment">Q</div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+8}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+8}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+8}' onclick='funShowQuot(this.id,${indexForOther+8})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>


<div class="articleBoxUpper" id="articleBoxUpper">
<div class="articleBoxUpperLeftPhoto"></div>
<div class="articleBoxUpperLeftText">swati_.suryawanshi</div>
<div class="articleBoxUpperRightDots" id="${indexForOther+9}a3" onclick="funPostOptions(this.id)">l</div>
</div> 

<div class="articleBox" onclick="funFeed(this.id)" id="${indexForOther+9}"><img src="10.jpeg" alt=""></div> 

<div class="articleBoxLower" id="articleBoxLower">
<div class="articleBoxLowerLike">&#10084;</div>
<div class="articleBoxLowerComment"><i class="fa fa-comment"></i></div>
</div>

<div class="articleBoxBottom" id="articleBoxBottom">
<div class="articleBoxBottomLikes">9000 likes</div>
<div class="articleBoxBottomQuot">
    <div class="articleBoxBottomQuotName" id="articleBoxBottomQuot${indexForOther+9}">swati_.suryawanshi</div>
    <div class="articleBoxBottomQuotText" id="articleBoxBottomQuotText${indexForOther+9}">Lorem ipsum dolor sit, amet conetur adipisicing elit. Cupiditate tenetur dolorum dicta? Sunt libero voluptate illo delectus deleniti recusandae culpa?</div>
</div>
<div class="articleBoxBottomQuotMore" id='articleBoxBottomQuotMore${indexForOther+9}' onclick='funShowQuot(this.id,${indexForOther+9})'>... more</div>
<div class="articleBoxBottomComments">View all 80 comments</div>
<div class="articleBoxBottomAddComment">
    <div class="articleBoxBottomAddCommentPhoto"></div>
    <input type="text" placeholder="Add a comment...">
    <div class="articleBoxBottomAddCommentPost">Post</div>
</div>
<div class="articleBoxBottomTime">2 hours ago</div>
</div>



`
                  
    articleBoxContainer.innerHTML = refreshPostBox;
    
    articleBoxNavNo.click();
    
}

