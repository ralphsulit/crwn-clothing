import './directory.style.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({categories}) => {
  return (
    <div>
      <div className='directory'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>   
    </div>
  );
};

export default Directory;