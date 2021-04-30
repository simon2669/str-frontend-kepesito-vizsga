function changeOuterLinks() {
  const selectedNav = document.getElementById('link-list');
  selectedNav.style.display = 'flex';
  selectedNav.style.flexDirection = 'column';
  selectedNav.style.width = '30%';
  selectedNav.style.margin = '0px auto';
  selectedNav.style.border = '1px solid blue';
  selectedNav.style.padding = '16px';



  return Array.from(document.querySelectorAll('#link-list a')).forEach(a => {
    if (a.innerHTML.toLowerCase().includes('outer-link')) {
      a.setAttribute('target', '_blank');
      a.innerHTML = `<strong>${a.innerHTML}</strong>`;
    }
    return a;
  })
}


export { changeOuterLinks };