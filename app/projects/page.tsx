export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      <section>
        <h2>Data, ML & Distributed Systems</h2>

        <h3>Graph-based Data Processing and Scalable Data Pipeline</h3>
        <p>
          Designed and implemented graph processing algorithms including
          PageRank and Breadth-First Search using Neo4j on large-scale NYC Yellow
          Cab trip datasets. Built a distributed data pipeline using Kafka,
          Kubernetes, and Neo4j, covering ingestion, transformation, storage,
          and querying.
        </p>
        <p>
          Containerized services with Docker and created Kubernetes deployment
          configurations and YAML files to integrate Kafka, Zookeeper, and
          Neo4j for scalable analytics workflows.
        </p>

        <h3>Retrieval-Augmented Generation (RAG) System for Code Applications</h3>
        <p>
          Built a Retrieval-Augmented Generation system combining sparse
          retrieval (BM25) and dense vector retrieval to enable context-aware
          code recommendations. Implemented efficient indexing using Faiss for
          vector storage and RocksDB for object storage.
        </p>
        <p>
          Preprocessed and chunked source code from repositories and integrated
          large language models to generate relevant, context-aware responses
          for developer-facing applications.
        </p>

        <h3>MLP and CNN Models for Image Classification</h3>
        <p>
          Implemented and trained a three-layer Multilayer Perceptron on custom
          datasets, experimenting with network depth and hidden units to
          optimize accuracy.
        </p>
        <p>
          Trained a Convolutional Neural Network on the CIFAR-10 dataset,
          incorporating batch normalization, dropout, and max pooling.
          Performed extensive hyperparameter tuning to evaluate the impact of
          learning rates, kernel sizes, batch sizes, and architecture choices.
        </p>

        <h3>Stroke Prediction Using Machine Learning Models</h3>
        <p>
          Conducted exploratory data analysis on a healthcare dataset, including
          data cleaning, handling missing values, and encoding categorical
          variables. Built and evaluated multiple machine learning models,
          including Logistic Regression, SVM, KNN, Decision Trees, and Naive
          Bayes.
        </p>
        <p>
          Compared model performance using classification metrics such as
          accuracy scores and classification reports to identify the most
          effective approaches for stroke prediction.
        </p>
      </section>
    </main>
  );
}
