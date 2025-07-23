function handleToggle(){
    const navigation = document.getElementById('navigation');
    const buttonToggle = document.getElementById('button_toggle');
    navigation.classList.toggle('active');
    buttonToggle.classList.toggle('active');
}