
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("http://ocsp.digicert.com")
		.inferHtmlResources(BlackList(), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-GB,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0")

	val headers_0 = Map("Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map("Content-Type" -> "application/ocsp-request")

    val uri1 = "http://ocsp.godaddy.com"
    val uri3 = "http://jeep.com"

	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get(uri3 + "/")
			.headers(headers_0)
			.resources(http("request_1")
			.post(uri1 + "/")
			.headers(headers_1)
			.body(RawFileBody("/RecordedSimulation/0001_request.dat")),
            http("request_2")
			.post("/")
			.headers(headers_1)
			.body(RawFileBody("/RecordedSimulation/0002_request.dat")),
            http("request_3")
			.post(uri1 + "/")
			.headers(headers_1)
			.body(RawFileBody("/RecordedSimulation/0003_request.dat"))))
		.pause(1)
		.exec(http("request_4")
			.post("/")
			.headers(headers_1)
			.body(RawFileBody("/RecordedSimulation/0004_request.dat"))
			.resources(http("request_5")
			.post(uri1 + "/")
			.headers(headers_1)
			.body(RawFileBody("/RecordedSimulation/0005_request.dat"))))
		.pause(13)
		.exec(http("request_6")
			.post("/")
			.headers(headers_1)
			.body(RawFileBody("/RecordedSimulation/0006_request.dat")))
		.pause(67)
		.exec(http("request_7")
			.post("/")
			.headers(headers_1)
			.body(RawFileBody("/RecordedSimulation/0007_request.dat")))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}