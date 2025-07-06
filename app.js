const allLists = document.querySelectorAll('.list');

function openList(list) {
  allLists.forEach((el) => {
    const answer = el.querySelector('.answer');
    const plusIcon = el.querySelector('.plus');
    const minusIcon = el.querySelector('.minus');

    if (el === list) {
      el.classList.add('active');
      answer.style.display = 'block';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    } else {
      el.classList.remove('active');
      answer.style.display = 'none';
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    }
  });
}

function closeList(list) {
  const answer = list.querySelector('.answer');
  const plusIcon = list.querySelector('.plus');
  const minusIcon = list.querySelector('.minus');

  list.classList.remove('active');
  answer.style.display = 'none';
  plusIcon.style.display = 'block';
  minusIcon.style.display = 'none';
}

allLists.forEach((list, i) => {
  const question = list.querySelector('.question');
  question.setAttribute('tabindex', '0');

  question.addEventListener('click', () => {
    const isActive = list.classList.contains('active');
    if (!isActive) {
      openList(list);
    } else {
      closeList(list);
    }
  });

  question.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = allLists[i + 1];
      if (next) next.querySelector('.question').focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = allLists[i - 1];
      if (prev) prev.querySelector('.question').focus();
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      openList(list);
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      closeList(list);
    }
  });
});

openList(allLists[0]);
