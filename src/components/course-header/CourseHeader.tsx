export const CourseHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">Curso de figma para DEVS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quos
        provident itaque amet voluptates accusantium accusamus excepturi commodi
        modi, sint veritatis quidem aspernatur perspiciatis. Cupiditate facilis,
        dicta nulla inventore maxime in expedita aliquam quia! Id sapiente
        placeat alias! Non facere minus, voluptatibus ad iste nisi itaque sit
        enim ullam ipsam.
      </p>
      <div className="flex gap-2 items-center">
        <button className="py-2 px-4 rounded-full bg-paper">Compartilhar</button>
        <span>48 aulas</span>
      </div>
    </div>
  );
};
