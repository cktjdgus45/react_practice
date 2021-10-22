import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = "";
    }
    return (
        <form ref={formRef} action="" className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef}
                type="text"
                placeholder="Habit"
                className="add-input" />
            <button className="add-button">Add</button>
        </form>
    );
})

export default HabitAddForm;