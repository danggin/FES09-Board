import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

BoardListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function BoardListItem({ item }) {
  const navigate = useNavigate();

  return (
    <tr className='border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out'>
      <td className='p-2 text-center'>{item._id}</td>
      <td
        className='p-2 truncate indent-4 cursor-pointer'
        onClick={() => navigate(`/boards/${item._id}`)}
      >
        <span className='font-medium'>{item.title}</span>
        {item.repliesCount ? (
          <span className='ml-2 text-gray-400'>({item.repliesCount})</span>
        ) : (
          ''
        )}
      </td>
      <td className='p-2 truncate'>{item.user.name}</td>
      <td className='p-2 text-center hidden sm:table-cell'>
        {item.views ? item.views : 0}
      </td>
      <td className='p-2 truncate text-center hidden sm:table-cell'>
        {item.updatedAt}
      </td>
    </tr>
  );
}

export default BoardListItem;
