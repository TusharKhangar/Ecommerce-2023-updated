import {BackgroudImage,Body,DirectoryContainer} from './directory-item.styles';
import { useNavigate} from 'react-router-dom';
const DirectoryItem = ({ category }) => {
  const { imageUrl, title , route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroudImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;