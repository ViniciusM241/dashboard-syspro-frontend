import React, { useState, useMemo, useCallback, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import getPosts from './services/getPosts';
import getTotalPosts from './services/getTotalPosts';

import PostDetails from './components/PostDetails';
import { T1, Col, Inline, Table, Button } from '~/components';
import { Container } from './styles';

function Posts() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState('');
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const _getTotalPosts = async () => {
    const totalPosts = await getTotalPosts(filters);
    setTotalPosts(totalPosts);
  };

  const _getPosts = async () => {
    const posts = await getPosts(filters);
    await _getTotalPosts();
    setPosts(posts);
  };

  const createNewPost = () => {
    setIsEditing(false);
    setSelectedPostId(1);
  };

  const columns = useMemo(() => [
    {
      label: '#',
      accessor: 'id',
    },
    {
      label: 'Data Criação',
      accessor: 'createdAt',
      value: (original, row) => {
        const formatted = moment(row).format('DD/MM/yyyy');
        return formatted;
      },
    },
    {
      label: 'Título',
      accessor: 'title',
    },
    {
      label: 'Rascunho?',
      accessor: 'draft',
      value: (original, row) => {
        if (row) return 'Sim';
        else return 'Não';
      },
    },
  ], [moment]);

  const onClickRow = useCallback((original, row) => {
    const id = row.id;

    setSelectedPostId(id);
    setIsEditing(true);
  }, [navigate]);

  const onFetchData = ({ order, pageIndex, maxPage }) => {
    const query = [];

    query.push(`start=${pageIndex * maxPage}&limit=${maxPage}`);

    if (order)
      query.push(`sort=${order.accessor}&order=${order.asc ? 'asc' : 'desc'}`);

    setFilters(query.join('&'));
  };

  useEffect(() => {
    _getPosts();
  }, [filters]);

  useEffect(() => {
    _getTotalPosts();
  }, []);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Gerenciar postagens</T1>
      </Col>
      <Col cols={12} className="mt-20">
        <Button onClick={createNewPost}> Criar nova + </Button>
      </Col>
      <Col cols={12} className="mt-10">
        <Inline>
          <Table
            data={posts}
            columns={columns}
            onClickRow={onClickRow}
            onFetchData={onFetchData}
            maxPage={5}
            total={totalPosts}
          />
        </Inline>
      </Col>
      {
        selectedPostId && (
          <PostDetails
            postId={selectedPostId}
            isEditing={isEditing}
            searchPosts={_getPosts}
            reset={setSelectedPostId}
            className='mt-20'
          />
        )
      }
    </Container>
  );
}

export default Posts;
