const form = document.querySelector('#request-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.namedItem('name');
  const message = form.elements.namedItem('message');
  for (const field of [name, message]) field.setCustomValidity(field.value.trim() ? '' : '공백이 아닌 내용을 입력해 주세요.');
  if (!form.reportValidity()) return;
  const result = document.querySelector('#request-result');
  result.textContent = `데모 확인 완료 · ${form.elements.namedItem('package').value}. 실제 문의는 전송되지 않았으며 입력 내용은 저장되지 않습니다.`;
  result.hidden = false;
  result.focus();
});
form.addEventListener('input', event => {
  if (event.target.setCustomValidity) event.target.setCustomValidity('');
  document.querySelector('#request-result').hidden = true;
});
