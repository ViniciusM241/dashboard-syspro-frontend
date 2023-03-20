import React, { useEffect, useState, useRef } from "react";
import getPostById from "../Admin/Posts/services/getPostById";
import { useNavigate, useParams } from "react-router-dom";

import {
  Container,
  Col,
  T1,
  T2,
  T3,
} from '~/components';

function Posts() {
  const navigate = useNavigate();
  const { id, title } = useParams();

  const divRef = useRef(null);
  const [post, setPost] = useState(null);

  const _getPostById = async () => {
    const post = await getPostById(id);

    if (post.draft) navigate('/dashboard');

    setPost(post);
  }

  useEffect(() => {
    _getPostById();
  }, []);

  useEffect(() => {
    divRef.current.innerHTML = post?.content;
  }, [post]);

  return (
    <Container>
      <Col cols={12}>
        <T1>{post?.title}</T1>
      </Col>
      <Col cols={12}>
        <T3>{post?.subtitle}</T3>
      </Col>
      <Col className="mt-20" cols={12}>
        <div ref={divRef}></div>
      </Col>
    </Container>
  );
}

export default Posts;
