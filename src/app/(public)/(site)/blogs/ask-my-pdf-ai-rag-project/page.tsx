import Link from "next/link";
import {
  Calendar,
  Clock,
  CheckCircle2,
  List,
  User,
  FileText,
  Database,
  Search,
  Brain,
  Wrench,
  Code2,
  TestTube2,
  Layers,
  Zap,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Ask My PDF Case Study | Imran Khan",
  description:
    "An in-depth look at Ask My PDF: a RAG-powered document Q&A system built with Next.js, FastAPI, Python, PostgreSQL, pgvector, local embeddings, and Ollama.",
};

// export const revalidate = 30;

const AskMyDocumentCaseStudy = async () => {
  return (
    <section className="relative overflow-hidden py-18 mx-auto">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background:
            "linear-gradient(to bottom, #3b82f6 0%, #ffffff 40%, #ffffff 60%, #3b82f6 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(to bottom, #010133 0%, #000000 40%, #000000 60%, #010133 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-12 px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Blog Container Card */}
        <article className="w-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl p-6 sm:p-10 lg:p-14 text-gray-800 dark:text-gray-200 leading-relaxed">
          {/* Header Section */}
          <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "AI Engineering",
                "Case Study",
                "RAG",
                "Next.js",
                "FastAPI",
                "Python",
                "PostgreSQL",
                "pgvector",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-purple-400 border border-blue-500/20 dark:border-purple-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Ask My PDF: Building a RAG-Powered Document Q&amp;A System
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                Imran Khan
              </span>

              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                October 2026
              </span>

              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                10 min read
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="mb-12 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40"
          >
            <div className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
              <List className="w-5 h-5 text-blue-600 dark:text-purple-400" />
              <span>Table of Contents</span>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {[
                { title: "The Idea", id: "the-idea" },
                {
                  title: "What I Wanted to Build",
                  id: "what-i-wanted-to-build",
                },
                {
                  title: "Why I Built It Without LangChain",
                  id: "without-langchain",
                },
                {
                  title: "Document Processing",
                  id: "document-processing",
                },
                {
                  title: "Chunking the Document",
                  id: "chunking-the-document",
                },
                {
                  title: "Turning Text Into Vectors",
                  id: "turning-text-into-vectors",
                },
                {
                  title: "Semantic Retrieval with pgvector",
                  id: "semantic-retrieval",
                },
                {
                  title: "Keeping the LLM Grounded",
                  id: "keeping-the-llm-grounded",
                },
                {
                  title: "Local AI Instead of Only API Models",
                  id: "local-ai",
                },
                {
                  title: "Building the Backend",
                  id: "building-the-backend",
                },
                {
                  title: "Engineering Challenge",
                  id: "engineering-challenge",
                },
                {
                  title: "Testing the Retrieval System",
                  id: "testing-the-retrieval-system",
                },
                {
                  title: "Frontend",
                  id: "frontend",
                },
                {
                  title: "What I Learned",
                  id: "what-i-learned",
                },
                {
                  title: "What I'd Improve Next",
                  id: "what-id-improve-next",
                },
                {
                  title: "From RAG to AI Engineering",
                  id: "from-rag-to-ai-engineering",
                },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-blue-600 dark:text-purple-400 font-bold">
                      •
                    </span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Article Body */}
          <div className="space-y-12 text-base sm:text-lg">
            {/* 01. The Idea */}
            <section className="space-y-4">
              <h2
                id="the-idea"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                The Idea
              </h2>

              <p>
                After spending time learning about AI engineering, I wanted to
                stop treating RAG as something I only understood from tutorials
                and actually build a complete system around it.
              </p>

              <p>The idea was simple:</p>

              <div className="bg-blue-50/50 dark:bg-purple-950/20 border border-blue-200 dark:border-purple-900/50 rounded-xl p-6 my-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center font-semibold text-gray-900 dark:text-white">
                  <span>Upload PDF</span>
                  <span className="text-blue-600 dark:text-purple-400">→</span>
                  <span>Understand Document</span>
                  <span className="text-blue-600 dark:text-purple-400">→</span>
                  <span>Ask Questions</span>
                  <span className="text-blue-600 dark:text-purple-400">→</span>
                  <span>Get Grounded Answers</span>
                </div>
              </div>

              <p>
                But building that simple experience required solving several
                problems behind the scenes.
              </p>

              <ul className="list-disc list-inside pl-2 space-y-2">
                <li>How should a PDF be processed?</li>
                <li>How should the text be divided into useful chunks?</li>
                <li>How can the system find the most relevant parts?</li>
                <li>
                  How should those pieces of information be passed to an LLM?
                </li>
                <li>
                  How can I make sure the model answers from the document
                  instead of simply making something up?
                </li>
              </ul>

              <p>
                That became the idea behind <strong>Ask My PDF</strong>.
              </p>
            </section>

            {/* 02. What I Wanted to Build */}
            <section className="space-y-4">
              <h2
                id="what-i-wanted-to-build"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                What I Wanted to Build
              </h2>

              <p>
                I wanted to build a complete RAG pipeline rather than simply
                connect an LLM API to a text box.
              </p>

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30 my-6">
                <div className="space-y-3 font-mono text-sm sm:text-base">
                  {(
                    [
                      ["PDF Upload", FileText],
                      ["PDF Text Extraction", FileText],
                      ["Page-Aware Chunking", Layers],
                      ["Embeddings", Brain],
                      ["PostgreSQL + pgvector", Database],
                      ["Semantic Retrieval", Search],
                      ["Relevant Context", Layers],
                      ["LLM", Brain],
                      ["Grounded Answer + Sources", CheckCircle2],
                    ] as const
                  ).map(([label, Icon], index) => (
                    <div key={label}>
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-blue-600 dark:text-purple-400 flex-shrink-0" />
                        <span>{label}</span>
                      </div>

                      {index < 8 && (
                        <div className="ml-1.5 border-l border-gray-300 dark:border-gray-700 h-3 my-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Screenshot */}
              <figure className="my-8">
                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <Image
                    src="/ask-my-pdf.png"
                    alt="Ask My PDF application interface"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>

                <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">
                  Ask My PDF — the application interface for uploading PDFs and
                  asking questions about their content.
                </figcaption>
              </figure>

              <p>
                The frontend is built with Next.js, while the backend is built
                with FastAPI and Python.
              </p>

              <p>
                For the database, I used PostgreSQL with pgvector so that
                document chunks and their vector embeddings could live together.
              </p>

              <p>
                For local development, I used a local embedding model and Ollama
                with Qwen3 4B rather than depending entirely on paid AI APIs.
              </p>
            </section>

            {/* 03. Why Without LangChain */}
            <section className="space-y-4">
              <h2
                id="without-langchain"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Why I Built It Without LangChain
              </h2>

              <p>
                One decision I made early was not to use LangChain for the first
                version.
              </p>

              <p>
                This wasn&apos;t because I think frameworks like LangChain are
                bad. I wanted to understand what was actually happening
                underneath the abstraction.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    The Abstraction
                  </h3>

                  <div className="font-mono text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <div>PDF</div>
                    <div>↓</div>
                    <div>LangChain</div>
                    <div>↓</div>
                    <div>RAG</div>
                    <div>↓</div>
                    <div>LLM</div>
                  </div>
                </div>

                <div className="border border-blue-200 dark:border-purple-900/50 rounded-xl p-5 bg-blue-50/30 dark:bg-purple-950/10">
                  <h3 className="font-semibold text-lg text-blue-600 dark:text-purple-400 mb-3">
                    What I Wanted to Understand
                  </h3>

                  <div className="font-mono text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <div>PDF</div>
                    <div>↓</div>
                    <div>Extract text</div>
                    <div>↓</div>
                    <div>Create chunks</div>
                    <div>↓</div>
                    <div>Generate embeddings</div>
                    <div>↓</div>
                    <div>Store vectors</div>
                    <div>↓</div>
                    <div>Search vectors</div>
                    <div>↓</div>
                    <div>Build context</div>
                    <div>↓</div>
                    <div>Generate answer</div>
                  </div>
                </div>
              </div>

              <p>That forced me to deal with the individual pieces myself.</p>

              <p>
                I had to understand what an embedding actually represents, what
                cosine distance means, why chunk size matters, how retrieval
                works, and how retrieved chunks become context for the model.
              </p>

              <p>
                That was more valuable to me than getting a working demo as
                quickly as possible.
              </p>
            </section>

            {/* 04. Document Processing */}
            <section className="space-y-4">
              <h2
                id="document-processing"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Document Processing
              </h2>

              <p>
                The first challenge was turning a PDF into something the system
                could actually search.
              </p>

              <p>
                A PDF isn&apos;t naturally a collection of clean database
                records. I used <code>pypdf</code> to extract text page by page.
              </p>

              <p>
                I deliberately kept the page number attached to every piece of
                extracted text.
              </p>

              <div className="bg-blue-50/50 dark:bg-purple-950/20 border border-blue-200 dark:border-purple-900/50 rounded-xl p-5 my-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  Why Keep Page Numbers?
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  I didn&apos;t want the final answer to simply say
                  <span className="italic">
                    {" "}
                    &quot;According to the document...&quot;
                  </span>
                  . I wanted the system to be able to tell the user where the
                  information came from.
                </p>
              </div>

              <p>So the document processing pipeline became:</p>

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20 font-mono text-sm sm:text-base">
                <div>PDF</div>
                <div className="pl-4">↓</div>
                <div className="pl-4">Page 1 → text</div>
                <div className="pl-4">Page 2 → text</div>
                <div className="pl-4">Page 3 → text</div>
                <div className="pl-4">...</div>
              </div>

              <p>
                Each page could then be processed independently while preserving
                its original location.
              </p>
            </section>

            {/* 05. Chunking */}
            <section className="space-y-4">
              <h2
                id="chunking-the-document"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Chunking the Document
              </h2>

              <p>
                One of the things I learned quickly was that simply putting an
                entire PDF into an LLM isn&apos;t a practical RAG strategy.
              </p>

              <p>The document needs to be divided into smaller pieces.</p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    Too Small
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Useful context can be lost when chunks become too small.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    Too Large
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Retrieval becomes less precise and each result can contain
                    too much unrelated information.
                  </p>
                </div>
              </div>

              <p>So I implemented paragraph-aware chunking.</p>

              <p>
                The system first identifies paragraph boundaries and tries to
                keep complete paragraphs together. When several paragraphs fit
                within the target chunk size, they are combined.
              </p>

              <p>
                When a single paragraph is too large, the system falls back to
                character-based splitting with overlap.
              </p>

              <div className="bg-blue-50/50 dark:bg-purple-950/20 border border-blue-200 dark:border-purple-900/50 rounded-xl p-5 my-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Current Chunking Configuration
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
                  <div>
                    <span className="font-semibold">Target chunk size:</span>{" "}
                    1000 characters
                  </div>

                  <div>
                    <span className="font-semibold">Overlap:</span> 200
                    characters
                  </div>
                </div>
              </div>

              <p>
                The important part wasn&apos;t choosing those numbers because
                they are supposedly the &quot;perfect&quot; values. It was
                understanding what the numbers actually do.
              </p>
            </section>

            {/* 06. Embeddings */}
            <section className="space-y-4">
              <h2
                id="turning-text-into-vectors"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Turning Text Into Vectors
              </h2>

              <p>
                Once the document has been divided into chunks, the system needs
                a way to understand which chunks are semantically related to a
                question.
              </p>

              <p>This is where embeddings come in.</p>

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30 my-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Embedding Model
                  </h3>
                </div>

                <code className="block bg-gray-100 dark:bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
                  sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2
                </code>

                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  The model produces 384-dimensional vectors, which are stored
                  in PostgreSQL using pgvector.
                </p>
              </div>

              <p>
                Instead of searching only for exact words, the database can
                compare the meaning of the user&apos;s question with the meaning
                represented by each document chunk.
              </p>

              <p>
                That was one of the most important concepts I learned while
                building this project.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Traditional Search
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic">
                    &quot;Does this text contain this word?&quot;
                  </p>
                </div>

                <div className="border border-blue-200 dark:border-purple-900/50 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-600 dark:text-purple-400 mb-2">
                    Semantic Search
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 italic">
                    &quot;Which pieces of text are most related to what the user
                    is asking?&quot;
                  </p>
                </div>
              </div>
            </section>

            {/* 07. Semantic Retrieval */}
            <section className="space-y-4">
              <h2
                id="semantic-retrieval"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Semantic Retrieval with pgvector
              </h2>

              <p>
                When a user asks a question, I generate an embedding for that
                question as well.
              </p>

              <p>
                The system then compares that vector against the stored document
                chunk vectors using cosine distance.
              </p>

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30">
                <div className="space-y-4">
                  {[
                    "Generate an embedding for the user's question.",
                    "Compare it against stored document chunk vectors.",
                    "Use cosine distance to measure similarity.",
                    "Order results by distance.",
                    "Take the most relevant chunks.",
                    "Apply a similarity threshold.",
                  ].map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600/10 dark:bg-purple-400/10 text-blue-600 dark:text-purple-400 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>A lower cosine distance means the vectors are more similar.</p>

              <p>
                I also added a similarity threshold so that obviously weak
                matches aren&apos;t automatically sent to the LLM.
              </p>

              <p>
                This was important because retrieval quality directly affects
                answer quality. If the wrong context is retrieved, the LLM has a
                much harder time producing a reliable answer.
              </p>
            </section>

            {/* 08. Grounding */}
            <section className="space-y-4">
              <h2
                id="keeping-the-llm-grounded"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Keeping the LLM Grounded
              </h2>

              <p>
                Retrieval alone doesn&apos;t answer the user&apos;s question. It
                only finds potentially relevant information.
              </p>

              <p>
                The next step is giving that information to the LLM as context.
              </p>

              <div className="border border-blue-200 dark:border-purple-900/50 rounded-xl p-6 bg-blue-50/30 dark:bg-purple-950/10 my-6">
                <div className="space-y-3 font-mono text-sm sm:text-base">
                  <div>User Question</div>
                  <div className="pl-4">↓</div>
                  <div className="pl-4">Question Embedding</div>
                  <div className="pl-4">↓</div>
                  <div className="pl-4">Vector Search</div>
                  <div className="pl-4">↓</div>
                  <div className="pl-4">Relevant Chunks</div>
                  <div className="pl-4">↓</div>
                  <div className="pl-4">Context</div>
                  <div className="pl-4">↓</div>
                  <div className="pl-4">LLM</div>
                  <div className="pl-4">↓</div>
                  <div className="pl-4">Answer</div>
                </div>
              </div>

              <p>
                The LLM isn&apos;t expected to search the entire database
                itself. The application retrieves the relevant information first
                and then asks the model to answer using that context.
              </p>

              <p>
                I also designed the response to include source information and
                page numbers. This makes the answer more useful and gives the
                user a way to check where the information came from.
              </p>
            </section>

            {/* 09. Local AI */}
            <section className="space-y-4">
              <h2
                id="local-ai"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Local AI Instead of Only API Models
              </h2>

              <p>
                Another thing I wanted from the project was the ability to run
                the AI locally.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Embeddings
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Sentence Transformers running locally.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/40 dark:bg-black/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      Generation
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Ollama with Qwen3 4B.
                  </p>
                </div>
              </div>

              <p>
                This meant I could build and test the complete RAG pipeline
                without paying for an API every time I changed a piece of code.
              </p>

              <p>
                But I didn&apos;t want the architecture to become permanently
                tied to local models.
              </p>

              <p>
                So I separated the AI providers from the rest of the
                application. The RAG service doesn&apos;t need to know whether
                the answer came from Ollama or an API provider.
              </p>

              <p>
                It simply asks the configured provider to generate an answer.
                This gives the application a cleaner path toward production
                deployment later.
              </p>
            </section>

            {/* 10. Backend */}
            <section className="space-y-4">
              <h2
                id="building-the-backend"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Building the Backend
              </h2>

              <p>The backend is built with FastAPI.</p>

              <p>
                I separated the application into different responsibilities
                instead of putting the entire RAG pipeline into one large route.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  "Document management",
                  "PDF extraction",
                  "Chunking",
                  "Embeddings",
                  "LLM providers",
                  "Retrieval",
                  "RAG orchestration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-white/40 dark:bg-black/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                For example, the document processing flow is responsible for
                turning an uploaded PDF into searchable chunks. The RAG service
                is responsible for answering questions.
              </p>

              <p>
                This separation became increasingly useful as the project grew.
              </p>

              <p>
                At the beginning, it would have been easy to put everything
                inside the upload endpoint. But once embeddings, retrieval, and
                LLM providers were added, keeping those responsibilities
                separate made the system much easier to reason about.
              </p>
            </section>

            {/* 11. Engineering Challenge */}
            <section className="space-y-6">
              <h2
                id="engineering-challenge"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                An Engineering Problem I Had to Solve
              </h2>

              <p>
                One of the interesting problems came from supporting both local
                and API-based AI providers.
              </p>

              <div className="space-y-4 border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Optional Provider Initialization
                  </h3>
                </div>

                <p>
                  Initially, the API embedding provider created its OpenAI
                  client as soon as the module was imported.
                </p>

                <p>
                  That caused a problem even when I wasn&apos;t using the API
                  provider. The application could fail during startup because
                  the API key wasn&apos;t configured, even though I had selected
                  the local provider.
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm my-4">
                  <div>Application starts</div>
                  <div>↓</div>
                  <div>Module imports API provider</div>
                  <div>↓</div>
                  <div>API client initializes</div>
                  <div>↓</div>
                  <div>API key missing</div>
                  <div>↓</div>
                  <div>Application fails</div>
                </div>

                <p>
                  The fix was simple but important: don&apos;t initialize an
                  optional external dependency until that provider is actually
                  being used.
                </p>

                <p>
                  Instead of creating the API client at module import time, I
                  moved the initialization inside the function that generates
                  embeddings.
                </p>

                <p>I applied the same idea to the LLM provider.</p>

                <div className="border-l-4 border-blue-600 dark:border-purple-400 pl-4 py-2 my-5">
                  <p className="font-semibold text-blue-600 dark:text-purple-400">
                    Architecture decisions eventually become real bugs if the
                    boundaries aren&apos;t thought through carefully.
                  </p>
                </div>
              </div>
            </section>

            {/* 12. Testing */}
            <section className="space-y-4">
              <h2
                id="testing-the-retrieval-system"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Testing the Retrieval System
              </h2>

              <p>
                I didn&apos;t want to test the application only with random PDFs
                and questions.
              </p>

              <p>
                So I created a dedicated multi-page test document containing
                information spread across different sections and pages.
              </p>

              <p>
                The document included intentionally similar concepts, specific
                numbers, policies, operational scenarios, and information that
                should not be present in the document.
              </p>

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30 my-6">
                <div className="flex items-center gap-2 mb-4">
                  <TestTube2 className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Example Questions
                  </h3>
                </div>

                <ul className="space-y-2 text-sm sm:text-base">
                  {[
                    "What is the example evening price?",
                    "What is the example cancellation cutoff?",
                    "What happens if two customers try to book the same slot?",
                    "Why can't payment amount alone identify a transaction?",
                    "Which role can manage financial information?",
                    "What was the collected advance in September?",
                    "What is TurfTrack's monthly subscription price?",
                  ].map((question) => (
                    <li key={question} className="flex gap-2">
                      <span className="text-blue-600 dark:text-purple-400">
                        •
                      </span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>The last type of question was especially important.</p>

              <p>
                A RAG system shouldn&apos;t simply produce a confident answer
                because the model knows something from its general training.
              </p>

              <p>
                If the requested information isn&apos;t in the document, the
                application should be able to say that it couldn&apos;t find the
                answer in the document.
              </p>

              <div className="bg-blue-50/50 dark:bg-purple-950/20 border border-blue-200 dark:border-purple-900/50 rounded-xl p-5 my-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  The Important Distinction
                </h3>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  There is a difference between <strong>answering</strong> and
                  being <strong>grounded</strong>.
                </p>
              </div>

              <p>
                That distinction is one of the most important things I took away
                from this project.
              </p>
            </section>

            {/* 13. Frontend */}
            <section className="space-y-4">
              <h2
                id="frontend"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                Frontend
              </h2>

              <p>The frontend is built with Next.js and Tailwind.</p>

              <p>
                The goal wasn&apos;t to build a complicated AI interface. I
                wanted something that felt like a practical document tool.
              </p>

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30 my-6">
                <div className="space-y-3 font-mono text-sm sm:text-base">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                    Documents
                  </div>

                  <div className="pl-1">↓</div>

                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                    Upload PDF
                  </div>

                  <div className="pl-1">↓</div>

                  <div className="flex items-center gap-3">
                    <Layers className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                    Select document
                  </div>

                  <div className="pl-1">↓</div>

                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                    Ask a question
                  </div>

                  <div className="pl-1">↓</div>

                  <div className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                    Read answer
                  </div>

                  <div className="pl-1">↓</div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-purple-400" />
                    Check sources
                  </div>
                </div>
              </div>

              <p>
                The frontend communicates with the FastAPI backend through the
                API.
              </p>

              <p>
                It handles document uploads, processing states, document
                management, questions, answers, and source information.
              </p>

              <p>
                I also added confirmation before permanently deleting a document
                rather than allowing a destructive action to happen immediately.
              </p>
            </section>

            {/* 14. What I Learned */}
            <section className="space-y-4">
              <h2
                id="what-i-learned"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                What I Learned From Building It
              </h2>

              <p>The biggest lesson wasn&apos;t how to call an LLM.</p>

              <p className="font-semibold text-blue-600 dark:text-purple-400">
                It was understanding that an AI application is still an
                application.
              </p>

              <p>
                There are databases, APIs, validation, error handling,
                background processing, provider configuration, frontend state,
                deployment concerns, and all the normal engineering problems
                that exist in other software projects.
              </p>

              <p>The AI part introduces another layer on top of that.</p>

              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white/50 dark:bg-black/30 my-6">
                <div className="flex items-center gap-3 mb-5">
                  <Code2 className="w-5 h-5 text-blue-600 dark:text-purple-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    RAG Quality Is a Pipeline Problem
                  </h3>
                </div>

                <div className="space-y-3 font-mono text-sm sm:text-base">
                  {[
                    "Extraction",
                    "Chunking",
                    "Embedding",
                    "Retrieval",
                    "Context",
                    "Prompt",
                    "LLM",
                  ].map((item, index, array) => (
                    <div key={item}>
                      <div>{item}</div>
                      {index < array.length - 1 && (
                        <div className="pl-1 py-1">↓</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p>
                A powerful model can&apos;t completely compensate for poor
                retrieval.
              </p>

              <p>
                And a good retrieval system can&apos;t fix a poorly designed
                generation step.
              </p>
            </section>

            {/* 15. What I'd Improve */}
            <section className="space-y-4">
              <h2
                id="what-id-improve-next"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2"
              >
                What I&apos;d Improve Next
              </h2>

              <p>
                The current system is a solid working RAG application, but there
                is still a lot more to explore.
              </p>

              <p>Some of the next areas I want to work on are:</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Stronger retrieval evaluation",
                  "Hybrid search",
                  "Reranking",
                  "Better document parsing",
                  "Production AI providers",
                  "Streaming responses",
                  "Background processing",
                  "Observability",
                  "AI application security",
                  "Production deployment and scaling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-white/40 dark:bg-black/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p className="pt-3">
                But I don&apos;t want to add features simply to make the project
                look bigger.
              </p>

              <p>
                The purpose of this project was to understand the fundamentals
                by building them.
              </p>

              <p>
                Now that I have a working RAG system, I can move on to a
                different class of AI problems.
              </p>
            </section>

            {/* 16. From RAG to AI Engineering */}
            <section className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <h2
                id="from-rag-to-ai-engineering"
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
              >
                From RAG to AI Engineering
              </h2>

              <p>Ask My PDF is my first serious step into AI engineering.</p>

              <div className="bg-blue-50/50 dark:bg-purple-950/20 border border-blue-200 dark:border-purple-900/50 rounded-xl p-6 my-6">
                <p className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  It started with a simple question:
                </p>

                <p className="italic text-blue-600 dark:text-purple-400">
                  How can I let a user ask questions about their own documents?
                </p>
              </div>

              <p>
                Answering that question took me through PDF processing,
                chunking, embeddings, vector databases, semantic retrieval,
                LLMs, provider architecture, API design, frontend integration,
                and evaluation.
              </p>

              <p>
                More importantly, it changed the way I think about AI
                applications.
              </p>

              <p className="font-semibold text-gray-900 dark:text-white">
                I don&apos;t want to learn AI by collecting frameworks and
                memorizing terminology. I want to understand the systems behind
                them by building.
              </p>

              <p>This project is one step in that direction.</p>

              <p>
                The next step is moving beyond RAG and building systems that can
                use tools, make decisions, and complete multi-step tasks.
              </p>

              <p>
                That&apos;s where I want to take my AI engineering journey next.
              </p>
            </section>
          </div>

          {/* Footer Back Link */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-purple-400 hover:underline"
            >
              ← Back to home
            </Link>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default AskMyDocumentCaseStudy;
