const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);
const containerPara = document.createElement('p');
containerPara.setAttribute('style', 'color:red');
containerPara.textContent = "Hey I'm red!";
const containerH3 = document.createElement('h3');
containerH3.setAttribute('style', 'color:blue');
containerH3.textContent = "I'm a blue h3!"
const containerDiv = document.createElement('div');
containerDiv.setAttribute('style', 'border: 1px solid black; background-color: pink')
const nestedH1 = document.createElement('h1');
const nestedPara = document.createElement('p');
nestedH1.textContent = "I'm in a div!";
nestedPara.textContent = "ME TOO!";
containerDiv.appendChild(nestedH1);
containerDiv.appendChild(nestedPara);
container.appendChild(containerPara);
container.appendChild(containerH3);
container.appendChild(containerDiv);