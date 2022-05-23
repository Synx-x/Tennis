import React from "react";
import styles from "../../styles/components/VideoGallery/Gallery.module.scss";
import VideoCard from "../VideoCard";
//import { rovingIndex } from "roving-ux";

const Gallery = () => {
	//   useEffect(() => {
	//     document
	//       .querySelectorAll(".horizontal-media-scroller")
	//       .forEach((scroller) =>
	//         rovingIndex({
	//           element: scroller,
	//           target: "a",
	//         })
	//       );
	//   }, []);

	return (
		<div className={styles.container}>
			<div className={styles.gallerySection}>
				<header>
					<h2>Intro to Tennis Equipment</h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
				</ul>
				{/* <ul className={styles.horizontalMediaScroller}>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?14"
                  />
                </picture>
                <figcaption>The Strain (limited)</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?15"
                  />
                </picture>
                <figcaption>The Following</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?16"
                  />
                </picture>
                <figcaption>BERLIN STATION</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?17"
                  />
                </picture>
                <figcaption>Penny Dreadful</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?18"
                  />
                </picture>
                <figcaption>Castle Rock</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?19"
                  />
                </picture>
                <figcaption>The Walking Dead</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?11"
                  />
                </picture>
                <figcaption>Legends</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?12"
                  />
                </picture>
                <figcaption>The Family</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?13"
                  />
                </picture>
                <figcaption>Almost Family</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?110"
                  />
                </picture>
                <figcaption>Fear The Walking Dead</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?121"
                  />
                </picture>
                <figcaption>Legends</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?132"
                  />
                </picture>
                <figcaption>The Family</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?123"
                  />
                </picture>
                <figcaption>Almost Family</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?144"
                  />
                </picture>
                <figcaption>The Strain</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?125"
                  />
                </picture>
                <figcaption>The Following</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?126"
                  />
                </picture>
                <figcaption>BERLIN STATION</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?137"
                  />
                </picture>
                <figcaption>Penny Dreadful</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?118"
                  />
                </picture>
                <figcaption>Castle Rock</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?419"
                  />
                </picture>
                <figcaption>The Walking Dead</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?110"
                  />
                </picture>
                <figcaption>Fear The Walking Dead</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?112"
                  />
                </picture>
                <figcaption>Legends</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?122"
                  />
                </picture>
                <figcaption>The Family</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?313"
                  />
                </picture>
                <figcaption>Almost Family</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?194"
                  />
                </picture>
                <figcaption>The Strain</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?915"
                  />
                </picture>
                <figcaption>The Following</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?176"
                  />
                </picture>
                <figcaption>BERLIN STATION</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?187"
                  />
                </picture>
                <figcaption>Penny Dreadful</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?178"
                  />
                </picture>
                <figcaption>Castle Rock</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?189"
                  />
                </picture>
                <figcaption>The Walking Dead</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a      href      = "#">
            <figure className = {styles.figure}>
                <picture>
                  <img
                    alt     = "A placeholder image"
                    loading = "lazy"
                    src     = "https://picsum.photos/500/500?117"
                  />
                </picture>
                <figcaption>Fear The Walking Dead</figcaption>
              </figure>
            </a>
          </li>
        </ul> */}
			</div>

			{/* <div className={styles.gallerySection}>
				<header>
					<h2>Preparing the Court</h2>
				</header>

				<ul className = {styles.horizontalMediaScroller}>
					<li>
						<GalleryItem
							imgsrc  = "https://picsum.photos/500/500?26"
							caption = "BERLIN STATION"
						/>
					</li>
					<li>
						<GalleryItem
							imgsrc  = "https://picsum.photos/500/500?27"
							caption = "Penny Awful: An original series"
						/>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?28"
									/>
								</picture>
								<figcaption>Castle Rock</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?29"
									/>
								</picture>
								<figcaption>The Walking Dead</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?210"
									/>
								</picture>
								<figcaption>Fear The Walking Dead</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?21"
									/>
								</picture>
								<figcaption>Legends</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?22"
									/>
								</picture>
								<figcaption>The Family</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?23"
									/>
								</picture>
								<figcaption>Almost Family</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?24"
									/>
								</picture>
								<figcaption>The Strain</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?25"
									/>
								</picture>
								<figcaption>The Following</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?26"
									/>
								</picture>
								<figcaption>BERLIN STATION</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?27"
									/>
								</picture>
								<figcaption>Penny Dreadful</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?28"
									/>
								</picture>
								<figcaption>Castle Rock</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?29"
									/>
								</picture>
								<figcaption>The Walking Dead</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?210"
									/>
								</picture>
								<figcaption>Fear The Walking Dead</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?21"
									/>
								</picture>
								<figcaption>Legends</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?21"
									/>
								</picture>
								<figcaption>Legends</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?22"
									/>
								</picture>
								<figcaption>The Family</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?23"
									/>
								</picture>
								<figcaption>Almost Family</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?24"
									/>
								</picture>
								<figcaption>The Strain</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?25"
									/>
								</picture>
								<figcaption>The Following</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?22"
									/>
								</picture>
								<figcaption>The Family</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?23"
									/>
								</picture>
								<figcaption>Almost Family</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?24"
									/>
								</picture>
								<figcaption>The Strain</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?25"
									/>
								</picture>
								<figcaption>The Following</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?26"
									/>
								</picture>
								<figcaption>BERLIN STATION</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?27"
									/>
								</picture>
								<figcaption>Penny Dreadful</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?28"
									/>
								</picture>
								<figcaption>Castle Rock</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?29"
									/>
								</picture>
								<figcaption>The Walking Dead</figcaption>
							</figure>
						</a>
					</li>
					<li>
						<a      href      = "#">
						<figure className = {styles.figure}>
								<picture>
									<img
										alt     = "A placeholder image"
										loading = "lazy"
										src     = "https://picsum.photos/500/500?210"
									/>
								</picture>
								<figcaption>Fear The Walking Dead</figcaption>
							</figure>
						</a>
					</li>
				</ul>
			</div> */}

			<div className={styles.gallerySection}>
				<header>
					<h2>Basic Form</h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
				</ul>
			</div>

			<div className={styles.gallerySection}>
				<header>
					<h2>Equipment</h2>
				</header>

				<ul className={styles.horizontalMediaScroller}>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
					<li>
						<VideoCard
							buttonVisible={false}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Gallery;

function GalleryItem({
	imgsrc,
	caption,
}: {
	imgsrc: string;
	caption: string;
}): JSX.Element {
	return (
		<a href="#">
			<figure className={styles.figure}>
				<picture>
					<img
						alt="A placeholder image"
						loading="lazy"
						src={imgsrc}
					/>
				</picture>
				<figcaption>{caption}</figcaption>
			</figure>
		</a>
	);
}
