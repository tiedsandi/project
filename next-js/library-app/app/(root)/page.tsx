import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => (
  <>
    <BookOverview {...(sampleBooks[0] as Book)} />

    <BookList
      title="Latest Books"
      books={sampleBooks as Book[]}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
