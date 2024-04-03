import '../styles/global.scss';
import SubjectsList from '@/components/subjectsLIst';
import Layout from '@/components/layout';

export default function Home() {
  return (
      <Layout>
        <SubjectsList/>
      </Layout>
  );
}
