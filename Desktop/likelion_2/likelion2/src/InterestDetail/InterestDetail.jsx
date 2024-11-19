import { useParams, useNavigate } from "react-router-dom";
import { jobPostsData } from "../home-data";
import Header from "../components/Header";
import Banner from "../components/CarouseBanner";
import "./InterestDetail.scss";

const InterestDetail = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const navigate = useNavigate();

  // ID를 기반으로 해당 데이터 찾기
  const post = jobPostsData.find((item) => item.id === parseInt(id, 10));

  if (!post) {
    return (
      <div className="container">
        <Header />
        <main className="content">
          <div className="Banner">
            <Banner />
          </div>
          <section className="detail-section">
            <button className="back-button" onClick={() => navigate(-1)}>
              ← 뒤로 가기
            </button>
            <p>데이터를 찾을 수 없습니다. 뒤로 가기 버튼을 클릭하세요.</p>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <main className="content">
        <div className="Banner">
          <Banner />
        </div>
        <section className="detail-section">
          {/* Title Section */}
          <div className="title-section">
            <img
              src={require("../components/icons/left-arrow.png")}
              alt="아이콘"
              className="title-icon"
              onClick={() => navigate("/interest")} // 클릭 시 interest 페이지로 이동
            />
            <h2 className="title">{post.title}</h2>
          </div>

          {/* URL Section */}
          <div className="url-section">
            <p>주소</p>
            <div className="url-box">{post.url}</div>
          </div>

          {/* Memo Section */}
          <div className="memo-section">
            <textarea
              className="memo-input"
              placeholder="메모 추가하기.."
              defaultValue={post.memo || ""}
            />
          </div>

          {/* Recruitment Info */}
          <div className="info">
            <h3>모집 정보</h3>
            <ul>
              <li>
                모집인원 <span>{post.recruitmentCount || "0명"}</span>
              </li>
              <li>
                모집마감 <span>{post.deadline || "상시채용"}</span>
              </li>
              <li>
                채용담당자 <span>{post.recruiter || "담당자"}</span>
              </li>
              <li>
                대표전화 <span className={post.phone ? "" : "info-none"}>{post.phone || "정보 없음"}</span>
              </li>
              <li>
                이메일 <span className={post.email ? "" : "info-none"}>{post.email || "정보 없음"}</span>
              </li>
            </ul>
          </div>

          {/* Visit Button */}
          <button
            className="visit-button"
            onClick={() => window.open(post.url, "_blank")}
          >
            사이트 방문하기
          </button>
        </section>
      </main>
    </div>
  );
};

export default InterestDetail;
