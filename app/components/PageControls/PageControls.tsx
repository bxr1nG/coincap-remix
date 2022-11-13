import { Form } from '@remix-run/react';

import { Button } from '~/styles/button';
import { Input } from '~/styles/input';

import { ControlsWrapper, HiddenInput, Replacer } from './styles';

function PageControls(props: {
  assetsCount: number;
  itemsPerPage: number;
  page: number;
}) {
  const { assetsCount, itemsPerPage, page } = props;
  return (
    <ControlsWrapper>
      {page > 1 ? (
        <Form reloadDocument method="get">
          <HiddenInput type="number" name="page" defaultValue={page - 1} />
          <Button type="submit">{'<<'}</Button>
        </Form>
      ) : (
        <Replacer />
      )}
      <Form reloadDocument method="get" autoComplete="off">
        <Input
          type="number"
          name="page"
          placeholder="Page"
          width="3rem"
          defaultValue={page}
        />
      </Form>
      {assetsCount === itemsPerPage ? (
        <Form reloadDocument method="get">
          <HiddenInput type="number" name="page" defaultValue={page + 1} />
          <Button type="submit">{'>>'}</Button>
        </Form>
      ) : (
        <Replacer />
      )}
    </ControlsWrapper>
  );
}

export default PageControls;
